import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';

export type FloatingTooltipProps = {
  open: boolean;
  content: React.ReactNode;
  chartWidth: number;
  chartHeight: number;
  anchorX: number;
  anchorY: number;
  maxWidth?: number;
};

export function FloatingTooltip(props: FloatingTooltipProps) {
  const { open, content, chartWidth, chartHeight, anchorX, anchorY, maxWidth = 220 } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useLayoutEffect(() => {
    if (!open) {
      return;
    }
    const el = ref.current;
    if (!el) {
      return;
    }
    const rect = el.getBoundingClientRect();
    setSize((s) => {
      const w = Math.ceil(rect.width);
      const h = Math.ceil(rect.height);
      if (s.w === w && s.h === h) {
        return s;
      }
      return { w, h };
    });
  }, [open, content, maxWidth]);

  const pos = useMemo(() => {
    const pad = 8;
    const w = Math.min(size.w || maxWidth, maxWidth, chartWidth);
    const h = size.h || 0;

    let left = anchorX + pad;
    let top = anchorY - pad - h;

    if (left + w > chartWidth) {
      left = anchorX - pad - w;
    }
    if (left < 0) {
      left = 0;
    }
    if (left + w > chartWidth) {
      left = Math.max(0, chartWidth - w);
    }

    if (top < 0) {
      top = anchorY + pad;
    }
    if (top + h > chartHeight) {
      top = Math.max(0, chartHeight - h);
    }

    return { left, top, w };
  }, [anchorX, anchorY, chartHeight, chartWidth, maxWidth, size.h, size.w]);

  if (!open || content === null || content === undefined || content === false) {
    return null;
  }

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: pos.left,
        top: pos.top,
        maxWidth,
        background: 'rgba(255,255,255,0.92)',
        color: 'rgba(0,0,0,0.85)',
        padding: '8px 10px',
        borderRadius: 8,
        boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
        fontSize: 12,
        lineHeight: 1.4,
        pointerEvents: 'none',
        transition: 'left 120ms ease-out, top 120ms ease-out',
        willChange: 'left, top',
      }}
    >
      {typeof content === 'string' || typeof content === 'number' ? (
        <div style={{ whiteSpace: 'pre' }}>{content}</div>
      ) : (
        content
      )}
    </div>
  );
}
