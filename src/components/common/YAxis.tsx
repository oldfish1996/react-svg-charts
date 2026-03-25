import React from 'react';
import { formatYAxis } from './format';
import { parseColor, getStroke } from '../../utils';
import type { BaseData } from './format';
import type { YAxisOption } from './types';
import { chartTokens } from '../../options/tokens';

interface YAxisProps {
  yAxis: YAxisOption;
  baseData: BaseData;
}

const YAxis: React.FC<YAxisProps> = ({ yAxis, baseData }) => {
  const { max, min, splitLine, axisLabel, emphasisValueLine, axisLine, axisTick } = yAxis;
  const {
    chartWidth,
    polyHeight,
    grid: { top, right, left },
  } = baseData;

  const {
    show: showSplitLine,
    color: splitLineColor,
    width: splitLineWidth,
    containLabel,
    omitBottomLine,
    dash,
  } = splitLine;

  const {
    align,
    baseline,
    baselineGap,
    margin,
    color: labelColor,
    fontSize,
    marginSide,
    show: showAxisLabel,
  } = axisLabel;

  const { labels, labelMax, sideLabelMax, sideLabels } = formatYAxis(yAxis);

  const step = polyHeight / (labels.length - 1);

  const splitLineStart = containLabel ? left : left + labelMax + margin;
  const splitLineEnd = containLabel
    ? chartWidth - right
    : chartWidth - right - sideLabelMax - marginSide;

  const yAxisData = labels.map((v, i) => {
    const labelGap = Array.isArray(baselineGap) ? baselineGap[i] : baselineGap;
    const textAnchor: 'end' | 'start' = align === 'right' ? 'end' : 'start';
    const offsetWidth = align === 'right' ? labelMax : 0;
    const y = top + step * i - labelGap;
    return {
      label: `${v}`,
      textAnchor,
      transform: `translate(${left + offsetWidth} ${y.toFixed(4)})`,
      sideLabel: `${sideLabels[i]}`,
      sideTransform: `translate(${chartWidth - right} ${y.toFixed(4)})`,
      splitLinePath: `M${splitLineStart} ${(top + step * i).toFixed(4)}L${splitLineEnd} ${(top + step * i).toFixed(4)}`,
    };
  });

  const emLines = emphasisValueLine
    ? Array.isArray(emphasisValueLine)
      ? emphasisValueLine
      : [emphasisValueLine]
    : [];
  const emLinePaths = emLines.map((v) => {
    const emValue = v?.value ?? max;
    const emLineHeight = top + ((max - emValue) / (max - min)) * polyHeight;
    return `M${splitLineStart} ${emLineHeight.toFixed(4)}L${splitLineEnd} ${emLineHeight.toFixed(4)}`;
  });

  return (
    <>
      {axisLine?.show ? (
        <path
          d={`M${splitLineStart.toFixed(4)} ${top.toFixed(4)}L${splitLineStart.toFixed(4)} ${(top + polyHeight).toFixed(4)}`}
          fill="transparent"
          stroke={parseColor(axisLine.color ?? chartTokens.color.grid.line).rgb}
          strokeWidth={axisLine.width ?? chartTokens.stroke.width.grid}
          strokeOpacity={parseColor(axisLine.color ?? chartTokens.color.grid.line).opacity}
          strokeDasharray={axisLine.dash}
        />
      ) : null}
      {showSplitLine
        ? yAxisData.map(({ splitLinePath }, index) =>
            index < yAxisData.length - 1 || !omitBottomLine ? (
              <path
                key={index}
                d={splitLinePath}
                fill="transparent"
                stroke={parseColor(splitLineColor).rgb}
                strokeWidth={splitLineWidth}
                strokeOpacity={parseColor(splitLineColor).opacity}
                strokeDasharray={dash && index < yAxisData.length - 1 ? dash : undefined}
              />
            ) : null,
          )
        : null}

      {axisTick?.show
        ? yAxisData.map((_, index) => {
            const y = top + step * index;
            const dir = align === 'right' ? 1 : -1;
            const x1 = splitLineStart;
            const x2 = splitLineStart + dir * axisTick.length;
            return (
              <path
                key={index}
                d={`M${x1.toFixed(4)} ${y.toFixed(4)}L${x2.toFixed(4)} ${y.toFixed(4)}`}
                fill="transparent"
                stroke={parseColor(axisTick.color).rgb}
                strokeWidth={axisTick.width}
                strokeOpacity={parseColor(axisTick.color).opacity}
              />
            );
          })
        : null}

      {showAxisLabel
        ? yAxisData.map(({ label, sideLabel, transform, sideTransform, textAnchor }, index) => (
            <React.Fragment key={index}>
              <text
                dominantBaseline={Array.isArray(baseline) ? baseline[index] : baseline}
                textAnchor={textAnchor}
                transform={transform}
                fill={labelColor}
                style={{
                  fontSize: `${fontSize}px`,
                  fontFamily: chartTokens.typography.fontFamily.sans,
                }}
              >
                {label}
              </text>
              {sideLabel ? (
                <text
                  dominantBaseline={Array.isArray(baseline) ? baseline[index] : baseline}
                  textAnchor="end"
                  transform={sideTransform}
                  fill={labelColor}
                  style={{
                    fontSize: `${fontSize}px`,
                    fontFamily: chartTokens.typography.fontFamily.sans,
                  }}
                >
                  {sideLabel}
                </text>
              ) : null}
            </React.Fragment>
          ))
        : null}

      {emLinePaths.map((d, index) => (
        <path key={index} d={d} {...getStroke(emLines[index])} />
      ))}
    </>
  );
};

export default YAxis;
