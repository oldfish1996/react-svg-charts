export interface CommonChartOption {
  id?: string;
  width: number;
  height: number;
  animationDuration: number;
  grid: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export interface XAxisOption {
  data: {
    label: string;
    value: string;
    style?: {
      align: 'start' | 'middle' | 'end';
      shift?: number;
    };
  }[];
  axisLabel: {
    show: boolean;
    fontSize: number;
    color: string;
    margin: number;
    formatter: (label: string, index: number) => string | number;
    rotate: number;
    interval: number;
  };
  gap?: number;
  axisLine?: LineProp;
  axisTick?: {
    show: boolean;
    length: number;
    color: string;
    width: number;
  };
  splitLine?: LineProp;
}

type Baseline = 'auto' | 'middle' | 'central' | 'hanging';

export interface LineProp {
  show?: boolean;
  width?: number;
  color?: string;
  dash?: string;
}

export interface YAxisOption {
  min: number;
  max: number;
  splitNum: number;
  axisLabel: {
    align: 'left' | 'right';
    baseline: Baseline | Baseline[];
    baselineGap: number | number[];
    show: boolean;
    margin: number;
    formatter: (v: number, index?: number) => string | number;
    color: string;
    fontSize: number;
    formatterSide: (v: number, index?: number) => string | number;
    marginSide: number;
  };
  splitLine: LineProp & {
    show: boolean;
    width: number;
    color: string;
    containLabel: boolean;
    omitBottomLine: boolean;
    dash?: string;
  };
  axisLine?: LineProp;
  axisTick?: {
    show: boolean;
    length: number;
    color: string;
    width: number;
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
}
