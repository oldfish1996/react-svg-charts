import React from 'react';
import type { BaseData } from './format';
import type { XAxisOption } from './types';
import { parseColor } from '../../utils';
import { chartTokens } from '../../options/tokens';

interface XAxisProps {
  xAxis: XAxisOption;
  baseData: BaseData;
}

const XAxis: React.FC<XAxisProps> = ({ xAxis, baseData }) => {
  const {
    xInterval,
    polyHeight,
    pointStartX,
    chartWidth,
    grid: { top },
  } = baseData;

  const { data, axisLabel, gap, axisLine, axisTick, splitLine } = xAxis;
  const { color, fontSize, margin, show, formatter, rotate, interval } = axisLabel;

  const step = gap ?? xInterval;
  const axisY = top + polyHeight;
  const startX = Math.max(0, pointStartX - step / 2);
  const endX = Math.min(chartWidth, pointStartX + (data.length - 1) * step + step / 2);

  const points = data.map((v, i) => {
    let x = pointStartX + i * xInterval;
    if (gap) {
      x = pointStartX + i * gap;
    }
    if (v.style?.shift) {
      x += v.style.shift;
    }
    return {
      x,
      align: v.style?.align || 'middle',
      label: v.label,
      index: i,
    };
  });

  const xAxisLabels = points
    .map((p) => {
      if (!show) {
        return null;
      }
      if (interval > 0 && p.index % (interval + 1) !== 0) {
        return null;
      }
      const label = formatter(p.label, p.index);
      if (label == null || `${label}` === '') {
        return null;
      }
      const x = p.x;
      const transform = `translate(${x.toFixed(4)} ${(axisY + margin).toFixed(4)})${
        rotate ? ` rotate(${rotate})` : ''
      }`;
      return { label, align: p.align, transform, x };
    })
    .filter((v): v is NonNullable<typeof v> => v != null);

  return (
    <>
      {axisLine?.show ? (
        <path
          d={`M${startX.toFixed(4)} ${axisY.toFixed(4)}L${endX.toFixed(4)} ${axisY.toFixed(4)}`}
          fill="transparent"
          stroke={parseColor(axisLine.color ?? chartTokens.color.grid.line).rgb}
          strokeWidth={axisLine.width ?? chartTokens.stroke.width.grid}
          strokeOpacity={parseColor(axisLine.color ?? chartTokens.color.grid.line).opacity}
          strokeDasharray={axisLine.dash}
        />
      ) : null}
      {splitLine?.show
        ? points.map(({ x }, index) =>
            index === points.length - 1 ? null : (
              <path
                key={index}
                d={`M${x.toFixed(4)} ${top.toFixed(4)}L${x.toFixed(4)} ${axisY.toFixed(4)}`}
                fill="transparent"
                stroke={parseColor(splitLine.color ?? chartTokens.color.grid.line).rgb}
                strokeWidth={splitLine.width ?? chartTokens.stroke.width.grid}
                strokeOpacity={parseColor(splitLine.color ?? chartTokens.color.grid.line).opacity}
                strokeDasharray={splitLine.dash}
              />
            ),
          )
        : null}
      {axisTick?.show
        ? points.map(({ x }, index) => (
            <path
              key={index}
              d={`M${x.toFixed(4)} ${axisY.toFixed(4)}L${x.toFixed(4)} ${(axisY + axisTick.length).toFixed(4)}`}
              fill="transparent"
              stroke={parseColor(axisTick.color).rgb}
              strokeWidth={axisTick.width}
              strokeOpacity={parseColor(axisTick.color).opacity}
            />
          ))
        : null}
      {xAxisLabels.map(({ label, align, transform }, index) => (
        <text
          key={index}
          dominantBaseline="hanging"
          textAnchor={align}
          transform={transform}
          fill={color}
          style={{
            fontSize: `${fontSize}px`,
            fontFamily: chartTokens.typography.fontFamily.sans,
          }}
        >
          {label}
        </text>
      ))}
    </>
  );
};

export default XAxis;
