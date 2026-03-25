import { useMemo } from 'react';
import type React from 'react';

import type { BaseData } from './format';
import { usePointerIndex } from './usePointerIndex';

export type CartesianInteractionConfig = {
  enabled: boolean;
  axisPointerEnabled: boolean;
  tooltipEnabled: boolean;
  svgRef: React.RefObject<SVGSVGElement>;
  baseData: BaseData;
  tooltipMaxWidth?: number;
};

export function useCartesianInteraction(config: CartesianInteractionConfig) {
  const { enabled, axisPointerEnabled, tooltipEnabled, svgRef, baseData, tooltipMaxWidth } = config;
  const { chartWidth, chartHeight, grid, polyHeight, xData, pointStartX, xInterval } = baseData;

  const {
    state: pointer,
    onPointerMove,
    onPointerLeave,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  } = usePointerIndex(xData.length, {
    enabled,
    getBounds: () => svgRef.current?.getBoundingClientRect() ?? null,
    pointStartX,
    xInterval,
    chartWidth,
  });

  const hoverIndex = pointer.index;

  const hoverX = useMemo(() => {
    if (hoverIndex === null) {
      return 0;
    }
    return pointStartX + hoverIndex * xInterval;
  }, [hoverIndex, pointStartX, xInterval]);

  const overlayStyle = useMemo<React.CSSProperties>(
    () => ({
      touchAction: 'none',
      WebkitTapHighlightColor: 'transparent',
      userSelect: 'none',
      WebkitUserSelect: 'none',
    }),
    [],
  );

  const plotWidth = chartWidth - grid.left - grid.right;

  const overlayRectProps = useMemo(
    () =>
      enabled
        ? ({
            x: grid.left,
            y: grid.top,
            width: plotWidth,
            height: polyHeight,
            fill: 'transparent',
            pointerEvents: 'all',
            onPointerMove,
            onPointerLeave,
            onPointerDown,
            onPointerUp,
            onPointerCancel,
            style: overlayStyle,
          } as const)
        : null,
    [
      enabled,
      grid.left,
      grid.top,
      plotWidth,
      polyHeight,
      onPointerMove,
      onPointerLeave,
      onPointerDown,
      onPointerUp,
      onPointerCancel,
      overlayStyle,
    ],
  );

  const axisPointerPathD = useMemo(() => {
    if (!enabled || !axisPointerEnabled || hoverIndex === null) {
      return null;
    }
    const x = hoverX.toFixed(4);
    const y1 = grid.top.toFixed(4);
    const y2 = (grid.top + polyHeight).toFixed(4);
    return `M${x} ${y1}L${x} ${y2}`;
  }, [axisPointerEnabled, enabled, grid.top, hoverIndex, hoverX, polyHeight]);

  const tooltipProps = useMemo(
    () => ({
      open: enabled && tooltipEnabled && hoverIndex !== null,
      chartWidth,
      chartHeight,
      anchorX: hoverX,
      anchorY: grid.top,
      maxWidth: tooltipMaxWidth,
    }),
    [chartHeight, chartWidth, enabled, grid.top, hoverIndex, hoverX, tooltipEnabled, tooltipMaxWidth],
  );

  return {
    hoverIndex,
    hoverX,
    xLabel: hoverIndex === null ? '' : xData[hoverIndex]?.label ?? '',
    containerStyle: overlayStyle,
    overlayRectProps,
    axisPointerPathD,
    tooltipProps,
  };
}

