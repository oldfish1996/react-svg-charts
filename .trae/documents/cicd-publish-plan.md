# CI/CD 发包流程设计

## Summary

为 `@oldfish1996/react-svg-charts` 设计一套清晰、可维护的 GitHub Actions 流程，分为两条独立 workflow：

1. **CI（PR / push 到 main 时跑）**：lint + typecheck + build，确保主干永远可发布。
2. **Release（推 `v*` git tag 时跑）**：再跑一次质量门禁 → 校验 tag 与 package.json 版本一致 → 构建 → 发布到 npm（自动按 prerelease 选 `next` / `latest` dist-tag）→ 创建 GitHub Release。

并在 README 中新增「Publishing」章节，说明 maintainer 的发版步骤。

## Current State Analysis

- 包名：`@oldfish1996/react-svg-charts`，scoped + `publishConfig.access=public` ，[package.json](file:///Users/bytedance/Desktop/project/react-svg-charts/package.json#L54-L56)
- 产物：ESM/CJS/UMD + d.ts，由 rollup 生成到 `dist/`，已有 `prepublishOnly: pnpm build` 兜底，[package.json](file:///Users/bytedance/Desktop/project/react-svg-charts/package.json#L45-L52)
- 已有脚本：`lint`、`typecheck`、`build`、`format`，无测试脚本
- 已有 workflow：[storybook-pages.yml](file:///Users/bytedance/Desktop/project/react-svg-charts/.github/workflows/storybook-pages.yml)（手动部署 Storybook 到 GitHub Pages）
- 现有 [npm-publish.yml](file:///Users/bytedance/Desktop/project/react-svg-charts/.github/workflows/npm-publish.yml) 是 `workflow_dispatch` 手动触发，按用户决策将被替换为 tag 触发
- `pnpm@9.10.0` 作为 packageManager，Node 20
- 未使用 changesets / semantic-release 等版本工具

## User Decisions

- 触发方式：**推 git tag (`v*`) 自动发布**
- 分离 CI：**新增 `ci.yml` 在 PR / push 时跑 lint+typecheck+build**
- 文档：在 `README.md` 中新增 Publishing 章节说明流程

## Proposed Changes

### 1. 新增 `.github/workflows/ci.yml`

**Why**：在合入 main 之前提供质量门禁，避免坏代码进入主干、确保任何时间点 main 都可发版。

**触发**：

- `pull_request`（任意分支 → main）
- `push` 到 `main`（合入后再跑一次，作为 main 健康度信号）

**Job 设计**：单 job `verify`，矩阵不开（包小，跑得快）

**Steps**：

1. `actions/checkout@v4`
2. `pnpm/action-setup@v4`，version 9.10.0（与 packageManager 对齐）
3. `actions/setup-node@v4`，node-version 20，`cache: pnpm`
4. `pnpm install --frozen-lockfile`
5. `pnpm lint`
6. `pnpm typecheck`
7. `pnpm build`（验证 rollup 配置可正常出包）

**permissions**：`contents: read`
**concurrency**：按 ref 取消旧的 in-progress run，避免连续 push 浪费资源

```yaml
concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true
```

### 2. 重写 `.github/workflows/npm-publish.yml`（替换现有内容）

**Why**：从 `workflow_dispatch` 切换为 `push tags v*` 触发，符合用户决策。

**触发**：

```yaml
on:
  push:
    tags:
      - 'v*'
```

**permissions**：

- `contents: write`（用于自动创建 GitHub Release）
- `id-token: write`（启用 npm provenance，CI 来源可验证，2026 年是行业标配）

**concurrency**：

```yaml
concurrency:
  group: npm-publish
  cancel-in-progress: false
```

**Steps**：

1. `actions/checkout@v4`，`fetch-depth: 0`
2. `pnpm/action-setup@v4`，version 9.10.0
3. `actions/setup-node@v4`：
   - `node-version: 20`
   - `cache: pnpm`
   - `registry-url: https://registry.npmjs.org`（让 setup-node 写好 .npmrc 中的 `_authToken`）
4. `pnpm install --frozen-lockfile`
5. **校验 tag 与 package.json 版本一致**（沿用现有逻辑思路）：
   ```bash
   TAG="${GITHUB_REF_NAME#v}"
   PKG_VERSION="$(node -p "require('./package.json').version")"
   if [ "$TAG" != "$PKG_VERSION" ]; then
     echo "::error::Tag $TAG does not match package.json $PKG_VERSION"
     exit 1
   fi
   ```
6. `pnpm lint`
7. `pnpm typecheck`
8. `pnpm build`
9. **发布到 npm**：
   ```bash
   PKG_VERSION="$(node -p "require('./package.json').version")"
   if echo "$PKG_VERSION" | grep -q '-'; then
     NPM_TAG=next
   else
     NPM_TAG=latest
   fi
   npm publish --access public --tag "$NPM_TAG" --provenance
   ```
   - 不传 `--registry`，避免覆盖 setup-node 写好的认证
   - `--provenance` 配合 `id-token: write` 启用，npm 页面会显示 provenance 徽章
   - `env.NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}`（要求是 **Automation** 类型 token，绕开 2FA）
10. **创建 GitHub Release**：使用 `softprops/action-gh-release@v2`
    - `tag_name: ${{ github.ref_name }}`
    - `generate_release_notes: true`（GitHub 自动从 commit/PR 生成 changelog）
    - `prerelease: ${{ contains(github.ref_name, '-') }}`

### 3. 更新 `README.md`，新增 "Publishing" 章节

**Why**：让 maintainer（包括未来的自己）知道如何安全地发版。

**插入位置**：在现有 `## Development` 之后追加新章节，不破坏原结构。

**章节内容**（中文 + 关键命令）：

- 前置准备：在 GitHub 仓库 Settings → Secrets 添加 `NPM_TOKEN`，必须是 npm "Automation" 类型 token（账户开启 2FA 后只有这种 token 能在 CI 直接发布，无需 OTP）
- 发版步骤（正式版 / 预发布版）：
  1. 确保 main 干净、CI 全绿
  2. 本地：`pnpm version patch|minor|major`（自动改 package.json 并打 tag）
     - 或预发布：`pnpm version prerelease --preid=beta`
  3. `git push --follow-tags`
  4. tag 推送后 [npm-publish.yml](file:///Users/bytedance/Desktop/project/react-svg-charts/.github/workflows/npm-publish.yml) 自动触发：跑校验 → 发布 → 创建 GitHub Release
  5. 含 `-` 的版本（例如 `0.2.0-beta.0`）会发布到 `next` dist-tag，正式版到 `latest`
- 失败排查：版本不匹配、Token 类型不对、未通过 lint/typecheck

## Assumptions & Decisions

1. **Tag 命名规范**：`v` 前缀（`v0.1.3`），与 `pnpm version` 默认行为一致。
2. **dist-tag 策略**：版本号含 `-` 自动归入 `next`，否则 `latest`。这是 npm 社区惯例，无需手工干预。
3. **Provenance**：启用。开销几乎为零，安全收益明显，且配套的 `id-token: write` 权限只用在 publish workflow，不影响 CI workflow。
4. **不引入 changesets**：当前是单包项目、维护者较少，YAGNI。GitHub `generate_release_notes` 已能产出可读 changelog。
5. **不加测试 step**：项目当前无测试脚本，不在本次范围内造测试。
6. **CI 不跑 `prettier --check`**：现有 `format` 是可选检查，不阻塞合并；如需强制可后续加。
7. **Storybook 部署不动**：[storybook-pages.yml](file:///Users/bytedance/Desktop/project/react-svg-charts/.github/workflows/storybook-pages.yml) 维持手动触发，与发包解耦。
8. **保留 `prepublishOnly`**：作为本地误用 `npm publish` 的兜底，CI 中也会再次执行 `pnpm build` 是冗余但安全。

## Verification

落地后，按以下步骤手工验证一次完整链路：

1. **验证 CI**：开一个空 PR（仅改 README），确认 `ci.yml` 自动触发，三个 step 全绿。
2. **验证版本校验失败分支**：本地手动 `git tag v9.9.9 && git push origin v9.9.9` 触发，应在 "Validate tag" step 失败并停止；之后 `git push --delete origin v9.9.9` 清理。
3. **验证正式版发布**：
   - 本地 `pnpm version patch && git push --follow-tags`
   - 等 Action 跑完，`npm view @oldfish1996/react-svg-charts versions` 出现新版本
   - npm 页面上对应版本带 provenance 徽章
   - GitHub Releases 页面自动出现新条目
4. **验证预发布**：
   - `pnpm version prerelease --preid=beta && git push --follow-tags`
   - 确认 `npm view @oldfish1996/react-svg-charts dist-tags` 中 `next` 指向预发布版本，`latest` 不变
5. **README 自检**：按 README Publishing 章节步骤一步步走，确认描述与实际行为一致。

## Files to Touch

| 文件 | 操作 |
| --- | --- |
| [.github/workflows/ci.yml](file:///Users/bytedance/Desktop/project/react-svg-charts/.github/workflows/ci.yml) | **新建** |
| [.github/workflows/npm-publish.yml](file:///Users/bytedance/Desktop/project/react-svg-charts/.github/workflows/npm-publish.yml) | **重写**（tag 触发 + provenance + GitHub Release） |
| [README.md](file:///Users/bytedance/Desktop/project/react-svg-charts/README.md) | **追加** Publishing 章节 |
