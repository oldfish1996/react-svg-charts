import type React from 'react';

export type ChartPadding =
  | number
  | { top?: number; right?: number; bottom?: number; left?: number };

export type AxisTextStyle = {
  color?: string;
  fontSize?: number;
  margin?: number;
};

export type AxisLineStyle = {
  show?: boolean;
  color?: string;
  width?: number;
  dash?: string;
};

export type AxisTickStyle = {
  show?: boolean;
  length?: number;
  color?: string;
  width?: number;
};

export type XAxisLabelStyle = AxisTextStyle & {
  show?: boolean;
  formatter?: (label: string, index: number) => string | number;
  rotate?: number;
  interval?: number;
};

export type YAxisLabelStyle = AxisTextStyle & {
  show?: boolean;
  formatter?: (v: number, index?: number) => string | number;
};

export type SimpleXAxis = AxisTextStyle & {
  labels?: string[];
  gap?: number;
  axisLabel?: XAxisLabelStyle;
  axisLine?: AxisLineStyle;
  axisTick?: AxisTickStyle;
  splitLine?: AxisLineStyle;
};

export type SimpleYAxis = AxisTextStyle & {
  min?: number;
  max?: number;
  splitNum?: number;
  align?: 'left' | 'right';
  labelFormatter?: (v: number, index?: number) => string | number;
  axisLabel?: YAxisLabelStyle;
  axisLine?: AxisLineStyle;
  axisTick?: AxisTickStyle;
  splitLine?: {
    show?: boolean;
    color?: string;
    width?: number;
    dash?: string;
    containLabel?: boolean;
    omitBottomLine?: boolean;
  };
  emphasisValueLine?:
    | {
        value: number;
        width?: number;
        color?: string;
        dash?: string;
      }
    | {
        value: number;
        width?: number;
        color?: string;
        dash?: string;
      }[];
};

export type BaseChartOption = {
  id?: string;
  width: number;
  height: number;
  padding?: ChartPadding;
  animationDuration?: number;
  interaction?: ChartInteraction;
};

export type ChartInteraction = {
  enabled?: boolean;
  axisPointer?: { show?: boolean };
  tooltip?: {
    show?: boolean;
    formatter?: (params: {
      index: number;
      xLabel: string;
      values: Array<number | undefined>;
    }) => React.ReactNode;
    render?: (params: {
      index: number;
      xLabel: string;
      values: Array<number | undefined>;
    }) => React.ReactNode;
  };
};

export type LineSeries = {
  values: Array<number | undefined>;
  smooth?: number;
  color?: string;
  width?: number;
  dash?: string;
  area?: { start: string; end: string };
  lineStyle?: {
    zeroValue?: number;
    segmentColor?: { above: string; below: string };
    segmentArea?: { above: { start: string; end: string }; below: { start: string; end: string } };
  };
  points?: boolean;
  pointSize?: number;
};

export type LineChartOption = BaseChartOption & {
  x?: SimpleXAxis;
  y?: SimpleYAxis;
  series: LineSeries | LineSeries[];
};

export type BarSeries = {
  values: number[];
  colors?: string | string[];
  barWidth?: number;
  radius?: number;
  shift?: number;
  zero?: number;
  labels?: boolean;
  labelFormatter?: (v: number) => string | number;
  labelColor?: string;
  labelFontSize?: number;
  labelGap?: number;
};

export type BarChartOption = BaseChartOption & {
  x?: SimpleXAxis;
  y?: SimpleYAxis;
  series: BarSeries | BarSeries[];
};

export type CandleSeries = {
  values: number[][];
  candleWidth?: number;
  rise?: { fill: string; border: string };
  fall?: { fill: string; border: string };
};

export type CandleChartOption = BaseChartOption & {
  x?: SimpleXAxis;
  y?: SimpleYAxis;
  series: CandleSeries;
};

export type MultiSeries =
  | ({ type: 'line' } & LineSeries)
  | ({ type: 'bar' } & BarSeries)
  | ({ type: 'candle' } & CandleSeries);

export type MultiChartOption = BaseChartOption & {
  x?: SimpleXAxis;
  y?: SimpleYAxis;
  series: MultiSeries[];
};

export type RadarIndicator = {
  text: string | string[];
  max: number;
  shiftX?: number;
  shiftY?: number;
};

export type RadarChartOption = {
  width: number;
  height: number;
  shape?: 'circle' | 'polygon';
  padding?: ChartPadding;
  splitNumber?: number;
  indicator: RadarIndicator[];
  indicatorStyle?: {
    fontSize?: number;
    fontColor?: string;
    gap?: number;
  };
  splitArea?: { color: string[] };
  splitLine?: { color?: string; width?: number; dash?: string };
  axisLine?: { show?: boolean; color?: string; width?: number; dash?: string };
  dataset: {
    values: number[];
    areaColor?: string;
    lineStyle?: { width?: number; color?: string; dash?: string };
    symbol?: { width?: number; color?: string; border?: { width: number; color: string } };
  }[];
};
