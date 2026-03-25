import React, { useMemo, useState } from 'react';
import type { OptionMetaItem } from '../option-meta/types';

export type OptionTableProps = {
  meta: OptionMetaItem[];
};

export function OptionTable(props: OptionTableProps) {
  const { meta } = props;
  const [query, setQuery] = useState('');

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return meta;
    }
    return meta.filter((m) => {
      return (
        m.path.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        (m.group ?? '').toLowerCase().includes(q)
      );
    });
  }, [meta, query]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ width: 72 }}>搜索</div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="按 path / 分组 / 描述过滤"
          style={{
            width: '100%',
            padding: '8px 10px',
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: 6,
          }}
        />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr>
              <th style={thStyle}>字段</th>
              <th style={thStyle}>类型</th>
              <th style={thStyle}>默认</th>
              <th style={thStyle}>说明</th>
              <th style={thStyle}>示例</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((m) => {
              const defaultCell = m.defaultToken
                ? `${m.defaultToken}${m.defaultValue ? ` (${m.defaultValue})` : ''}`
                : (m.defaultValue ?? '');
              return (
                <tr key={m.path} style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <td style={tdStyle}>
                    <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                      {m.path}
                    </div>
                    {m.group ? (
                      <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>{m.group}</div>
                    ) : null}
                  </td>
                  <td style={tdStyle}>
                    <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                      {m.type}
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                      {defaultCell || '-'}
                    </div>
                  </td>
                  <td style={tdStyle}>{m.description}</td>
                  <td style={tdStyle}>
                    {m.example ? (
                      <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                        {m.example}
                      </div>
                    ) : (
                      '-'
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '10px 8px',
  background: 'rgba(0,0,0,0.03)',
  borderBottom: '1px solid rgba(0,0,0,0.08)',
  position: 'sticky',
  top: 0,
  zIndex: 1,
};

const tdStyle: React.CSSProperties = {
  padding: '10px 8px',
  verticalAlign: 'top',
};
