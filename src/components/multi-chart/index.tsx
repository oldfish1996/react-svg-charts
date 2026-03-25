import React, { useMemo, useRef } from 'react';
import { XAxis, YAxis } from '../common';
import Polyline from '../line-chart/Polyline';
import Polypoints from '../line-chart/Polypoints';
import Candleline from '../candle-chart/Candleline';
import Barline from '../bar-chart/Barline';
import { format } from '../common/format';
import type { MultiChartOption } from '../../api';
import { resolveMultiOption } from '../../options/resolve';
import { useStableId } from '../../options/useStableId';
import { parseColor } from '../../utils';
import { FloatingTooltip } from '../common/FloatingTooltip';
import { useCartesianInteraction } from '../common/useCartesianInteraction';

export type { MultiChartOption };

export interface MultiChartProps extends React.HTMLAttributes<HTMLDivElement> {
  option: MultiChartOption;
}

export const MultiChart: React.FC<MultiChartProps> = ({ option, style, className, ...rest }) => {
  const autoId = useStableId('rsc-multi');
  const id = option.id ?? autoId;
  const { series, internal, xAxis, yAxis } = resolveMultiOption(option, id);
  const baseData = format({ option: internal });
  const { chartWidth, chartHeight } = baseData;
  const svgRef = useRef<SVGSVGElement>(null);
  const interactionEnabled = option.interaction?.enabled ?? true;
  const axisPointerEnabled = option.interaction?.axisPointer?.show ?? true;
  const tooltipEnabled = option.interaction?.tooltip?.show ?? true;

  const interaction = useCartesianInteraction({
    enabled: interactionEnabled,
    axisPointerEnabled,
    tooltipEnabled,
    svgRef,
    baseData,
    tooltipMaxWidth: 260,
  });

  const tooltipContent = useMemo(() => {
    const idx = interaction.hoverIndex;
    if (!tooltipEnabled || idx === null) {
      return null;
    }
    const xLabel = interaction.xLabel;
    const values = series.map((s) => {
      switch (s.type) {
        case 'line':
          return s.values[idx];
        case 'bar':
          return s.values[idx];
        case 'candle': {
          const v = s.values[idx];
          return v ? v[1] : undefined;
        }
        default:
          return undefined;
      }
    });
    const params = { index: idx, xLabel, values };
    const render = option.interaction?.tooltip?.render;
    if (render) {
      return render(params);
    }
    const formatter = option.interaction?.tooltip?.formatter;
    if (formatter) {
      return formatter(params);
    }
    const lines = series
      .map((s, i) => {
        switch (s.type) {
          case 'line': {
            const v = s.values[idx];
            return `S${i + 1}(line): ${v ?? '-'}`;
          }
          case 'bar': {
            const v = s.values[idx];
            return `S${i + 1}(bar): ${v ?? '-'}`;
          }
          case 'candle': {
            const v = s.values[idx];
            if (!v) {
              return `S${i + 1}(candle): -`;
            }
            const [o, c, l, h] = v;
            return `S${i + 1}(candle): O${o} C${c} L${l} H${h}`;
          }
          default:
            return '';
        }
      })
      .filter(Boolean);
    return [xLabel, ...lines].filter(Boolean).join('\n');
  }, [interaction.hoverIndex, interaction.xLabel, option.interaction?.tooltip, series, tooltipEnabled]);

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
        <g>
          {series.map((v, idx) => {
            switch (v.type) {
              case 'line':
                return (
                  <React.Fragment key={idx}>
                    <Polyline index={idx} data={v} baseData={baseData} />
                    <Polypoints index={idx} data={v} baseData={baseData} />
                  </React.Fragment>
                );
              case 'candle':
                return (
                  <Candleline key={idx} data={v} baseData={baseData} activeIndex={interaction.hoverIndex} />
                );
              case 'bar':
                return (
                  <Barline key={idx} data={v} baseData={baseData} activeIndex={interaction.hoverIndex} />
                );
              default:
                return null;
            }
          })}
        </g>
        {interaction.axisPointerPathD ? (
          <>
            <path
              d={interaction.axisPointerPathD}
              stroke="rgba(0,0,0,0.18)"
              strokeWidth={1}
            />
            {series.map((s, idx) => {
              if (s.type !== 'line') {
                return null;
              }
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
      </svg>
    </div>
  );
};

export default MultiChart;
