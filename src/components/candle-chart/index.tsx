import React, { useMemo, useRef } from 'react';
import { XAxis, YAxis } from '../common';
import Candleline from './Candleline';
import { format } from '../common/format';
import type { CandleChartOption } from '../../api';
import { resolveCandleOption } from '../../options/resolve';
import { useStableId } from '../../options/useStableId';
import { FloatingTooltip } from '../common/FloatingTooltip';
import { useCartesianInteraction } from '../common/useCartesianInteraction';

export { Candleline };
export type { CandleChartOption };

export interface CandleChartProps extends React.HTMLAttributes<HTMLDivElement> {
  option: CandleChartOption;
}

export const CandleChart: React.FC<CandleChartProps> = ({ option, style, className, ...rest }) => {
  const autoId = useStableId('rsc-candle');
  const id = option.id ?? autoId;
  const { series, internal, xAxis, yAxis } = resolveCandleOption(option, id);
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
    tooltipMaxWidth: 220,
  });

  const tooltipContent = useMemo(() => {
    const idx = interaction.hoverIndex;
    if (!tooltipEnabled || idx === null) {
      return null;
    }
    const xLabel = interaction.xLabel;
    const ohlc = series.values[idx];
    const values = ohlc ? [...ohlc] : [];
    const params = { index: idx, xLabel, values };
    const render = option.interaction?.tooltip?.render;
    if (render) {
      return render(params);
    }
    const formatter = option.interaction?.tooltip?.formatter;
    if (formatter) {
      return formatter(params);
    }
    if (!ohlc) {
      return `${xLabel}`;
    }
    const [open, close, low, high] = ohlc;
    return `${xLabel}\nO:${open} C:${close}\nL:${low} H:${high}`;
  }, [interaction.hoverIndex, interaction.xLabel, option.interaction?.tooltip, series.values, tooltipEnabled]);

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
        <Candleline data={series} baseData={baseData} activeIndex={interaction.hoverIndex} />
        {interaction.axisPointerPathD ? (
          <path d={interaction.axisPointerPathD} stroke="rgba(0,0,0,0.18)" strokeWidth={1} />
        ) : null}
        {interaction.overlayRectProps ? <rect {...interaction.overlayRectProps} /> : null}
      </svg>
    </div>
  );
};

export default CandleChart;
