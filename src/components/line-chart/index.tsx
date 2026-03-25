import React, { useEffect, useMemo, useRef } from 'react';
import { XAxis, YAxis } from '../common';
import Polyline from './Polyline';
import Polypoints from './Polypoints';
import { format } from '../common/format';
import type { LineChartOption } from '../../api';
import { resolveLineOption } from '../../options/resolve';
import { useStableId } from '../../options/useStableId';
import { parseColor } from '../../utils';
import { FloatingTooltip } from '../common/FloatingTooltip';
import { useCartesianInteraction } from '../common/useCartesianInteraction';

export { Polyline, Polypoints };
export type { LineChartOption };

export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  option: LineChartOption;
}

export const LineChart: React.FC<LineChartProps> = ({ option, style, className, ...rest }) => {
  const autoId = useStableId('rsc-line');
  const id = option.id ?? autoId;
  const { series, internal, xAxis, yAxis } = resolveLineOption(option, id);
  const { animationDuration } = internal;
  const baseData = format({ option: internal });
  const { chartWidth, chartHeight, pointStartX, yAxisMargin, clipWidth, clipHeight } = baseData;
  const svgRef = useRef<SVGSVGElement>(null);

  const clipPathRef = useRef<SVGPathElement>(null);
  const interactionEnabled = option.interaction?.enabled ?? true;
  const axisPointerEnabled = option.interaction?.axisPointer?.show ?? true;
  const tooltipEnabled = option.interaction?.tooltip?.show ?? true;

  const interaction = useCartesianInteraction({
    enabled: interactionEnabled,
    axisPointerEnabled,
    tooltipEnabled,
    svgRef,
    baseData,
    tooltipMaxWidth: 220,
  });

  const tooltipContent = useMemo(() => {
    const idx = interaction.hoverIndex;
    if (!tooltipEnabled || idx === null) {
      return null;
    }
    const xLabel = interaction.xLabel;
    const values = series.map((s) => s.values[idx]);
    const params = { index: idx, xLabel, values };
    const render = option.interaction?.tooltip?.render;
    if (render) {
      return render(params);
    }
    const formatter = option.interaction?.tooltip?.formatter;
    if (formatter) {
      return formatter(params);
    }
    const lines = values.map((v, i) => `S${i + 1}: ${v ?? '-'}`);
    return [xLabel, ...lines].filter(Boolean).join('\n');
  }, [
    interaction.hoverIndex,
    interaction.xLabel,
    option.interaction?.tooltip,
    series,
    tooltipEnabled,
  ]);

  useEffect(() => {
    if (animationDuration <= 0) {
      return;
    }

    let animationWidth = 0;
    const clipPathEle = clipPathRef.current;
    if (!clipPathEle) {
      return;
    }

    function animate() {
      animationWidth += clipWidth / (animationDuration / 16);
      clipPathEle!.setAttribute(
        'd',
        `M${pointStartX - yAxisMargin} 0h${animationWidth} v${clipHeight} h-${animationWidth} Z`,
      );
      if (animationWidth < clipWidth) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [animationDuration, clipHeight, clipWidth, pointStartX, yAxisMargin]);

  const useClip = animationDuration > 0;
  const grid = baseData.grid;

  return (
    <div
      id={id}
      className={className}
      style={{
        position: 'relative',
        width: `${chartWidth}px`,
        height: `${chartHeight}px`,
        ...interaction.containerStyle,
        fontSize: 0,
        ...style,
      }}
      {...rest}
    >
      <FloatingTooltip {...interaction.tooltipProps} content={tooltipContent} />
      <svg ref={svgRef} width={chartWidth} height={chartHeight}>
        <XAxis xAxis={xAxis} baseData={baseData} />
        <YAxis yAxis={yAxis} baseData={baseData} />
        <g clipPath={useClip ? 'url(#animation_clip)' : undefined}>
          {series.map((v, idx) => (
            <Polyline key={idx} index={idx} data={v} baseData={baseData} />
          ))}
          {series.map((v, idx) => (
            <Polypoints key={idx} index={idx} data={v} baseData={baseData} />
          ))}
        </g>
        {interaction.axisPointerPathD ? (
          <>
            <path d={interaction.axisPointerPathD} stroke="rgba(0,0,0,0.18)" strokeWidth={1} />
            {series.map((s, idx) => {
              const v = s.values[interaction.hoverIndex!];
              if (typeof v !== 'number' || Number.isNaN(v)) {
                return null;
              }
              const cy =
                (baseData.max - v) * (baseData.polyHeight / (baseData.max - baseData.min || 1)) +
                grid.top;
              const { rgb, opacity } = parseColor(s.color);
              return (
                <circle
                  key={idx}
                  cx={interaction.hoverX}
                  cy={cy}
                  r={3}
                  fill={rgb}
                  fillOpacity={opacity}
                  stroke="#fff"
                  strokeWidth={1.5}
                />
              );
            })}
          </>
        ) : null}
        {interaction.overlayRectProps ? <rect {...interaction.overlayRectProps} /> : null}
        {useClip ? (
          <defs>
            <clipPath id="animation_clip">
              <path
                ref={clipPathRef}
                d={`M${pointStartX - yAxisMargin} 0h0 v${clipHeight} h0 Z`}
                fill="#000"
              />
            </clipPath>
          </defs>
        ) : null}
      </svg>
    </div>
  );
};

export default LineChart;
