# react-svg-charts

React SVG chart components: LineChart, BarChart, CandleChart, RadarChart, MultiChart.

## Features

- SVG-based, framework-friendly chart components
- Multiple chart types: line, bar, candlestick, radar, and mixed (multi) charts
- TypeScript-first option APIs
- Basic interactions (axis pointer / tooltip) via `interaction`
- Storybook for local development and examples

## Install

```bash
npm i @oldfish1996/react-svg-charts
```

## Usage

```tsx
import React from 'react';
import { LineChart } from '@oldfish1996/react-svg-charts';

export function BasicLine() {
  return (
    <LineChart
      width={600}
      height={320}
      x={{ labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      series={{ values: [120, 200, 150, 80, 70] }}
    />
  );
}
```

## API (high level)

- `LineChart` / `LineChartOption` / `LineSeries`
- `BarChart` / `BarChartOption` / `BarSeries`
- `CandleChart` / `CandleChartOption` / `CandleSeries`
- `MultiChart` / `MultiChartOption` / `MultiSeries`
- `RadarChart` / `RadarChartOption` / `RadarIndicator`

## Links

- Storybook: https://oldfish1996.github.io/react-svg-charts/

## Development

- `pnpm install`
- `pnpm build`
- `pnpm storybook`

## Publishing

本项目通过 GitHub Actions 自动发布到 npm，触发方式为「推送 `v*` 形式的 git tag」。

### 前置准备（仅 maintainer，一次性）

1. 在 [npmjs.com](https://www.npmjs.com/) 账户的 Access Tokens 页面，生成一个 **Automation** 类型的 token。
   - 账户已启用 2FA 时，只有 Automation token 能在 CI 中直接发布而不要求 OTP。
2. 在 GitHub 仓库 Settings → Secrets and variables → Actions 中新增 secret，命名为 `NPM_TOKEN`，值为上一步生成的 token。

### 发版步骤

1. 确认 `main` 分支干净且 [CI](.github/workflows/ci.yml) 全绿。
2. 在本地切到最新 `main`，执行版本号升级：

   ```bash
   # 正式版
   pnpm version patch    # 或 minor / major

   # 预发布版
   pnpm version prerelease --preid=beta
   ```

   该命令会自动修改 `package.json` 的 `version` 字段并打上对应的 `vX.Y.Z` git tag。

3. 推送 commit 与 tag：

   ```bash
   git push --follow-tags
   ```

4. tag 推送后，[Publish to npm](.github/workflows/npm-publish.yml) workflow 会自动触发，依次执行：
   - 校验 tag 与 `package.json` 的版本一致
   - `pnpm lint` / `pnpm typecheck` / `pnpm build`
   - `npm publish --access public --provenance`
   - 创建对应的 GitHub Release（自动生成 release notes）

### dist-tag 策略

| 版本号格式 | 示例 | 发布到的 dist-tag |
| --- | --- | --- |
| 不含 `-` | `0.2.0` | `latest` |
| 含 `-` | `0.2.0-beta.0` | `next` |

安装预发布版本：

```bash
npm i @oldfish1996/react-svg-charts@next
```

### 失败排查

- **Tag does not match package.json**：tag 名（去掉 `v`）必须与 `package.json` 中 `version` 完全一致。
- **OTP / 401 Unauthorized**：`NPM_TOKEN` 不是 Automation 类型，或已过期；重新生成并更新 secret。
- **lint / typecheck 失败**：在本地修复后再重新打 tag 发版。

