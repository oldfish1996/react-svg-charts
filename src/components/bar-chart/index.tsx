import React, { useEffect, useMemo, useRef, useState } from 'react';
import { XAxis, YAxis } from '../common';
import Barline from './Barline';
import { format } from '../common/format';
import type { BarChartOption } from '../../api';
import { resolveBarOption } from '../../options/resolve';
import { useStableId } from '../../options/useStableId';
import { FloatingTooltip } from '../common/FloatingTooltip';
import { useCartesianInteraction } from '../common/useCartesianInteraction';

export { Barline };
export type { BarChartOption };

export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  option: BarChartOption;
}

export const BarChart: React.FC<BarChartProps> = ({ option, style, className, ...rest }) => {
  const autoId = useStableId('rsc-bar');
  const id = option.id ?? autoId;
  const { series, internal, xAxis, yAxis } = resolveBarOption(option, id);
  const { animationDuration } = internal;
  const [progress, setProgress] = useState(1);
  const svgRef = useRef<SVGSVGElement>(null);

  const baseData = format({ option: internal });
  const { chartWidth, chartHeight } = baseData;
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

  const seriesKey = useMemo(() => series.map((s) => s.values.join(',')).join('|'), [series]);

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
      setProgress(1);
      return;
    }
    setProgress(0);
    let raf = 0;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / animationDuration);
      setProgress(easeOutCubic(t));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
    };
  }, [animationDuration, id, seriesKey]);

  return (
    <div
      id={id}
      className={className}
      style={{
        position: 'relative',
        width: `${chartWidth}px`,
        height: `${chartHeight}px`,
        overflowX: 'hidden',
        overflowY: 'hidden',
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
        {series.map((s, i) => (
          <Barline
            key={i}
            data={s}
            baseData={baseData}
            progress={progress}
            activeIndex={interaction.hoverIndex}
          />
        ))}
        {interaction.axisPointerPathD ? (
          <path d={interaction.axisPointerPathD} stroke="rgba(0,0,0,0.18)" strokeWidth={1} />
        ) : null}
        {interaction.overlayRectProps ? <rect {...interaction.overlayRectProps} /> : null}
      </svg>
    </div>
  );
};

export default BarChart;
