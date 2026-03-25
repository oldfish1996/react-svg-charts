import { calcTextWidth } from '../../utils';
import { chartTokens } from '../../options/tokens';

import type { XAxisOption, YAxisOption, CommonChartOption } from './types';

export function formatYAxis(yAxis: YAxisOption) {
  const { min, max, splitNum, axisLabel } = yAxis;
  const {
    fontSize,
    margin: yAxisMargin,
    marginSide: yAxisMarginSide,
    formatter,
    formatterSide,
    show,
  } = axisLabel;

  const interval = (max - min) / splitNum;
  const labels: Array<string | number> = [formatter(min, 0)];
  const sideLabels: Array<string | number> = [formatterSide(min, 0)];
  let currentValue = min;
  while (labels.length < splitNum + 1) {
    const idx = labels.length;
    currentValue += interval;
    labels.unshift(formatter(currentValue, idx));
    sideLabels.unshift(formatterSide(currentValue, idx));
  }

  const labelWidths = show ? labels.map((v) => calcTextWidth(`${v}`, fontSize)) : labels.map(() => 0);
  const sideLabelWidths = show
    ? sideLabels.map((v) => calcTextWidth(`${v}`, fontSize))
    : sideLabels.map(() => 0);
  const labelMax = show ? Math.max(...labelWidths) : 0;
  const sideLabelMax = show ? Math.max(...sideLabelWidths) : 0;

  return {
    labels,
    labelMax,
    sideLabels,
    sideLabelMax,
    labelWidths,
    sideLabelWidths,
    yAxisMargin: show ? yAxisMargin : 0,
    yAxisMarginSide: show ? yAxisMarginSide : 0,
    min,
    max,
  };
}

export function format(props: {
  option: CommonChartOption & {
    xAxis: XAxisOption;
    yAxis: YAxisOption;
    xIntervalType: 'line' | 'bar';
    dataset: unknown;
  };
}) {
  const { option } = props;
  const {
    id,
    width: chartWidth,
    height: chartHeight,
    animationDuration,
    grid,
    xAxis,
    yAxis,
    xIntervalType,
  } = option;
  const { top, right, bottom, left } = grid;
  const { data: xData, axisLabel: xAxisLabel } = xAxis;
  const xAxisLabelMargin = xAxisLabel.show ? xAxisLabel.margin : 0;
  const xAxisLabelFontSize = xAxisLabel.show ? xAxisLabel.fontSize : 0;

  const {
    labelMax: yLabelWidthMax,
    sideLabelMax: ySideLabelWidthMax,
    yAxisMargin,
    yAxisMarginSide,
    min,
    max,
  } = formatYAxis(yAxis);

  const basePointStartX = left + yLabelWidthMax + yAxisMargin;
  const rightSpace = right + ySideLabelWidthMax + yAxisMarginSide;

  const basePolyWidth = chartWidth - basePointStartX - rightSpace;
  const polyHeight =
    chartHeight -
    (top + bottom) -
    xAxisLabelMargin -
    xAxisLabelFontSize * chartTokens.typography.lineHeight.axis;

  const clipWidth = chartWidth - left - yLabelWidthMax;
  const clipHeight = chartHeight - bottom;

  let pointStartX = basePointStartX;
  let polyWidth = basePolyWidth;

  let xInterval = 0;
  if (xIntervalType === 'bar') {
    xInterval = xData.length > 0 ? basePolyWidth / xData.length : 0;
    pointStartX = basePointStartX + xInterval / 2;
    polyWidth = basePolyWidth - xInterval;
  } else {
    xInterval = xData.length > 1 ? basePolyWidth / (xData.length - 1) : 0;
  }

  return {
    id,
    chartWidth,
    chartHeight,
    clipWidth,
    clipHeight,
    polyWidth,
    polyHeight,
    pointStartX,
    rightSpace,
    yAxisMargin,
    yAxisMarginSide,
    yLabelWidthMax,
    ySideLabelWidthMax,
    animationDuration,
    grid: { top, right, bottom, left },
    xInterval,
    xData,
    min,
    max,
  };
}

export type BaseData = ReturnType<typeof format>;
