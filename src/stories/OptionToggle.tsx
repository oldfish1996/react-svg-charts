import React, { useMemo, useState } from 'react';

export type OptionToggleProps = {
  value: unknown;
  defaultOpen?: boolean;
  title?: string;
};

export function OptionToggle(props: OptionToggleProps) {
  const { value, defaultOpen = false, title = 'Option' } = props;
  const [open, setOpen] = useState(defaultOpen);

  const text = useMemo(() => stringify(value), [value]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          style={{
            cursor: 'pointer',
            border: '1px solid rgba(0,0,0,0.12)',
            background: '#fff',
            padding: '6px 10px',
            borderRadius: 6,
            fontSize: 12,
          }}
        >
          {open ? `隐藏 ${title}` : `显示 ${title}`}
        </button>
        <div style={{ fontSize: 12, opacity: 0.7 }}>{title}</div>
      </div>

      {open ? (
        <pre
          style={{
            margin: 0,
            padding: 12,
            borderRadius: 8,
            border: '1px solid rgba(0,0,0,0.08)',
            background: 'rgba(0,0,0,0.03)',
            overflowX: 'auto',
            fontSize: 12,
            lineHeight: 1.5,
          }}
        >
          {text}
        </pre>
      ) : null}
    </div>
  );
}

function stringify(value: unknown) {
  const seen = new WeakSet<object>();
  return JSON.stringify(
    value,
    (_k, v) => {
      if (typeof v === 'function') {
        return v.toString();
      }
      if (v && typeof v === 'object') {
        if (seen.has(v)) {
          return '[Circular]';
        }
        seen.add(v);
      }
      if (typeof v === 'number' && Number.isNaN(v)) {
        return 'NaN';
      }
      return v;
    },
    2,
  );
}
