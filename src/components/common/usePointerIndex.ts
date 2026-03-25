import { useEffect, useMemo, useRef, useState } from 'react';
import type React from 'react';

export type PointerIndexConfig = {
  enabled: boolean;
  getBounds: () => DOMRect | null;
  pointStartX: number;
  xInterval: number;
  chartWidth: number;
  mode?: 'auto' | 'hover' | 'press';
};

export type PointerIndexState = {
  index: number | null;
  x: number;
  y: number;
};

export function usePointerIndex(count: number, config: PointerIndexConfig) {
  const { enabled, getBounds, pointStartX, xInterval, chartWidth, mode = 'auto' } = config;
  const [state, setState] = useState<PointerIndexState>({ index: null, x: 0, y: 0 });
  const latestEventRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const activeRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const pointerTypeRef = useRef<string | null>(null);

  const clampCount = Math.max(0, count);

  const api = useMemo(() => {
    if (!enabled) {
      return {
        onPointerMove: undefined,
        onPointerLeave: undefined,
        onPointerDown: undefined,
        onPointerUp: undefined,
        onPointerCancel: undefined,
      } as const;
    }

    const computeAndSet = () => {
      rafRef.current = 0;
      const latest = latestEventRef.current;
      if (!latest) {
        return;
      }

      const x = Math.min(Math.max(0, latest.x), chartWidth);
      const y = latest.y;

      if (clampCount <= 0 || xInterval <= 0) {
        setState((s) => (s.index === null ? s : { index: null, x, y }));
        return;
      }

      const idx = Math.min(clampCount - 1, Math.max(0, Math.round((x - pointStartX) / xInterval)));
      setState((s) => {
        if (s.index === idx && Math.abs(s.x - x) < 0.01 && Math.abs(s.y - y) < 0.01) {
          return s;
        }
        return { index: idx, x, y };
      });
    };

    const schedule = () => {
      if (rafRef.current) {
        return;
      }
      rafRef.current = requestAnimationFrame(computeAndSet);
    };

    const shouldPressMode = () => {
      if (mode === 'press') {
        return true;
      }
      if (mode === 'hover') {
        return false;
      }
      return pointerTypeRef.current === 'touch';
    };

    return {
      onPointerDown: (e: React.PointerEvent) => {
        pointerTypeRef.current = e.pointerType;
        const pressMode = shouldPressMode();
        if (pressMode) {
          activeRef.current = true;
          pointerIdRef.current = e.pointerId;
        }
        const bounds = getBounds();
        if (!bounds) {
          return;
        }
        if (e.cancelable && pressMode) {
          e.preventDefault();
        }
        latestEventRef.current = { x: e.clientX - bounds.left, y: e.clientY - bounds.top };
        if (activeRef.current && pointerIdRef.current !== null) {
          try {
            e.currentTarget.setPointerCapture(pointerIdRef.current);
          } catch {
            void 0;
          }
        }
        schedule();
      },
      onPointerMove: (e: React.PointerEvent) => {
        pointerTypeRef.current = e.pointerType;
        if (shouldPressMode() && !activeRef.current) {
          return;
        }
        const bounds = getBounds();
        if (!bounds) {
          return;
        }
        latestEventRef.current = { x: e.clientX - bounds.left, y: e.clientY - bounds.top };
        if (activeRef.current) {
          if (e.cancelable) {
            e.preventDefault();
          }
        }
        schedule();
      },
      onPointerUp: (e: React.PointerEvent) => {
        if (pointerIdRef.current !== null) {
          try {
            e.currentTarget.releasePointerCapture(pointerIdRef.current);
          } catch {
            void 0;
          }
        }
        pointerIdRef.current = null;
        activeRef.current = false;
        latestEventRef.current = null;
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = 0;
        }
        setState((s) => (s.index === null ? s : { ...s, index: null }));
      },
      onPointerCancel: (e: React.PointerEvent) => {
        if (pointerIdRef.current !== null) {
          try {
            e.currentTarget.releasePointerCapture(pointerIdRef.current);
          } catch {
            void 0;
          }
        }
        pointerIdRef.current = null;
        activeRef.current = false;
        latestEventRef.current = null;
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = 0;
        }
        setState((s) => (s.index === null ? s : { ...s, index: null }));
      },
      onPointerLeave: () => {
        if (shouldPressMode() && activeRef.current) {
          return;
        }
        latestEventRef.current = null;
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = 0;
        }
        setState((s) => (s.index === null ? s : { ...s, index: null }));
      },
    } as const;
  }, [chartWidth, clampCount, enabled, getBounds, mode, pointStartX, xInterval]);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
    };
  }, []);

  return { state, ...api };
}
