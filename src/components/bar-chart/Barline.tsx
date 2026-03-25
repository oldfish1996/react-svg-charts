import React from 'react';
import { parseColor } from '../../utils';
import type { BaseData } from '../common/format';
import type { BarSeries } from '../../api';
import { chartTokens } from '../../options/tokens';

type ResolvedBarSeries = BarSeries & {
  colors: string | string[];
  radius: number;
  shift: number;
  labels: boolean;
  labelFormatter: (v: number) => string | number;
  labelColor: string;
  labelFontSize: number;
  labelGap: number | number[];
  zero: number;
};

interface BarlineProps {
  data: ResolvedBarSeries;
  baseData: BaseData;
  progress?: number;
  activeIndex?: number | null;
}

const Barline: React.FC<BarlineProps> = ({
  data,
  baseData,
  progress = 1,
  activeIndex = null,
}) => {
  const { xInterval, pointStartX, polyHeight, polyWidth, max, min, grid } = baseData;

  const {
    values,
    colors,
    barWidth,
    radius,
    shift,
    labels,
    labelFormatter,
    labelColor,
    labelFontSize,
    labelGap,
    zero,
  } = data;

  const xAxisLength = values.length;

  const heights = values.map((v) => {
    if (v >= zero) {
      const upHeight = polyHeight * ((max - zero) / (max - min));
      return (upHeight * (v - zero)) / (max - zero || 1);
    }
    const downHeight = polyHeight * ((zero - min) / (max - min));
    return (downHeight * (zero - v)) / (zero - min || 1);
  });

  const rectWidth = barWidth || polyWidth / xAxisLength / 2;

  return (
    <>
      {heights.map((h, index) => {
        const x = shift + parseFloat((pointStartX + index * xInterval - rectWidth / 2).toFixed(4));

        const zeroRelativeHeight = (polyHeight * (zero - min)) / (max - min);
        const baselineY = grid.top + polyHeight - zeroRelativeHeight;
        const hAnim = h * progress;
        const y = values[index] > zero ? baselineY - hAnim : baselineY;

        const fill = Array.isArray(colors) ? colors[index] || colors[0] : colors;
        let gap = Array.isArray(labelGap) && labelGap[index] ? labelGap[index] : labelGap;
        gap = values[index] < zero ? -gap : gap;

        const { rgb, opacity } = parseColor(fill);

        return (
          <React.Fragment key={index}>
            <rect
              x={x}
              y={y}
              width={rectWidth}
              height={hAnim}
              rx={radius}
              fill={rgb}
              fillOpacity={opacity}
              stroke={index === activeIndex ? 'rgba(0,0,0,0.25)' : undefined}
              strokeWidth={index === activeIndex ? 1 : undefined}
            />
            {labels ? (
              <text
                textAnchor="middle"
                dominantBaseline={values[index] < zero ? 'hanging' : 'auto'}
                y={-gap}
                transform={`translate(${x + rectWidth / 2} ${y + (values[index] < zero ? hAnim : 0)})`}
                fill={labelColor}
                style={{
                  fontSize: `${labelFontSize}px`,
                  fontFamily: chartTokens.typography.fontFamily.sans,
                  fontWeight: 400,
                }}
              >
                {labelFormatter(values[index])}
              </text>
            ) : null}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Barline;
