import React from 'react';
import { parseColor } from '../../utils';
import type { BaseData } from '../common/format';
import type { CandleSeries } from '../../api';

type ResolvedCandleSeries = CandleSeries & {
  rise: { fill: string; border: string };
  fall: { fill: string; border: string };
};

interface CandlelineProps {
  data: ResolvedCandleSeries;
  baseData: BaseData;
  activeIndex?: number | null;
}

const Candleline: React.FC<CandlelineProps> = ({ data, baseData, activeIndex = null }) => {
  const { pointStartX, xInterval, xData, polyHeight, polyWidth, max, min, grid } = baseData;
  const { values, candleWidth, rise, fall } = data;
  const riseFillColor = rise.fill;
  const riseBorderColor = rise.border;
  const fallFillColor = fall.fill;
  const fallBorderColor = fall.border;

  const rectWidth = candleWidth || polyWidth / xData.length / 2;
  const paths = values.map((val, i) => {
    const [start, end, low, high] = val.map(
      (v) => (max - v) * (polyHeight / (max - min)) + grid.top,
    );
    const xMid = parseFloat((pointStartX + i * xInterval).toFixed(4));
    const xLeft = xMid - rectWidth / 2;
    const xRight = xMid + rectWidth / 2;
    const bottom = Math.max(start, end);
    const top = Math.min(start, end);
    return {
      d: `M${xLeft} ${bottom}L${xLeft} ${top}h${rectWidth} L${xRight} ${bottom}Z M${xMid} ${bottom}L${xMid} ${low} M${xMid} ${top} L${xMid} ${high}`,
      stroke: start > end ? riseBorderColor : fallBorderColor,
      fill: start > end ? riseFillColor : fallFillColor,
    };
  });

  return (
    <>
      {paths.map(({ d, stroke, fill }, i) => (
        <path
          key={i}
          d={d}
          stroke={stroke}
          strokeWidth={i === activeIndex ? 2 : 1}
          fill={parseColor(fill).rgb}
          fillOpacity={parseColor(fill).opacity}
        />
      ))}
    </>
  );
};

export default Candleline;
