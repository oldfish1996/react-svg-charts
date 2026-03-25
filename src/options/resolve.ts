import type {
  BarChartOption,
  BarSeries,
  CandleChartOption,
  CandleSeries,
  LineChartOption,
  LineSeries,
  MultiChartOption,
  RadarChartOption,
} from '../api';
import type { XAxisOption, YAxisOption } from '../components/common/types';
import { normalizePadding, normalizeXAxis, normalizeYAxis } from '../components/common/normalize';
import { chartTokens } from './tokens';

export type ResolvedLineSeries = LineSeries & {
  smooth: number;
  color: string;
  width: number;
  points: boolean;
  pointSize: number;
  lineStyle?: {
    zeroValue: number;
    segmentColor?: { above: string; below: string };
    segmentArea?: { above: { start: string; end: string }; below: { start: string; end: string } };
  };
};

export type ResolvedBarSeries = BarSeries & {
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

export type ResolvedCandleSeries = CandleSeries & {
  rise: { fill: string; border: string };
  fall: { fill: string; border: string };
};

export type ResolvedMultiSeries =
  | ({ type: 'line' } & ResolvedLineSeries)
  | ({ type: 'bar' } & ResolvedBarSeries)
  | ({ type: 'candle' } & ResolvedCandleSeries);

type InternalCartesianOption = {
  id: string;
  width: number;
  height: number;
  animationDuration: number;
  grid: { top: number; right: number; bottom: number; left: number };
  xAxis: XAxisOption;
  yAxis: YAxisOption;
  xIntervalType: 'line' | 'bar';
  dataset: unknown;
};

export function resolveLineOption(option: LineChartOption, id: string) {
  const seriesArr = Array.isArray(option.series) ? option.series : [option.series];
  const series: ResolvedLineSeries[] = seriesArr.map((s) => {
    const segmentColor =
      s.lineStyle?.segmentColor ??
      (s.lineStyle?.segmentArea
        ? { above: chartTokens.color.chart.positive, below: chartTokens.color.chart.negative }
        : undefined);
    const lineStyle = s.lineStyle
      ? {
          zeroValue: s.lineStyle.zeroValue ?? 0,
          segmentColor,
          segmentArea: s.lineStyle.segmentArea,
        }
      : undefined;
    return {
      ...s,
      smooth: s.smooth ?? 0,
      color: s.color ?? chartTokens.color.chart.line,
      width: s.width ?? chartTokens.stroke.width.line,
      points: s.points ?? false,
      pointSize: s.pointSize ?? chartTokens.size.point,
      lineStyle,
    };
  });

  const valuesForExtent = series
    .flatMap((s) => s.values)
    .filter((v): v is number => typeof v === 'number' && !Number.isNaN(v));

  const grid = normalizePadding(option.padding);
  const xAxis = normalizeXAxis(option.x, Math.max(...series.map((s) => s.values.length), 0));
  const yAxis = normalizeYAxis(option.y, valuesForExtent);

  const internal: InternalCartesianOption = {
    id,
    width: option.width,
    height: option.height,
    animationDuration: option.animationDuration ?? 0,
    grid,
    xAxis,
    yAxis,
    xIntervalType: 'line',
    dataset: series,
  };

  return { id, series, internal, xAxis, yAxis };
}

export function resolveBarOption(option: BarChartOption, id: string) {
  const rawSeries = Array.isArray(option.series) ? option.series : [option.series];
  const series: ResolvedBarSeries[] = rawSeries.map((s) => ({
    ...s,
    colors: s.colors ?? chartTokens.color.chart.bar,
    radius: s.radius ?? chartTokens.shape.radius.bar,
    shift: s.shift ?? 0,
    labels: s.labels ?? false,
    labelFormatter: s.labelFormatter ?? ((v: number) => v),
    labelColor: s.labelColor ?? chartTokens.color.text.secondary,
    labelFontSize: s.labelFontSize ?? chartTokens.typography.fontSize.axis,
    labelGap: s.labelGap ?? chartTokens.spacing.label.gap,
    zero: s.zero ?? 0,
  }));

  const maxLen = Math.max(...series.map((s) => s.values.length), 0);
  const valuesForExtent = series.flatMap((s) => [...s.values, s.zero ?? 0]);
  const grid = normalizePadding(option.padding);
  const xAxis = normalizeXAxis(option.x, maxLen);
  const yAxis = normalizeYAxis(option.y, valuesForExtent);
  for (let i = 0; i < series.length; i++) {
    const s = series[i]!;
    s.zero = rawSeries[i]?.zero ?? yAxis.min;
  }

  const internal: InternalCartesianOption = {
    id,
    width: option.width,
    height: option.height,
    animationDuration: option.animationDuration ?? 0,
    grid,
    xAxis,
    yAxis,
    xIntervalType: 'bar',
    dataset: series as unknown,
  };

  return { id, series, internal, xAxis, yAxis };
}

export function resolveCandleOption(option: CandleChartOption, id: string) {
  const s = option.series;
  const series: ResolvedCandleSeries = {
    ...s,
    rise: s.rise ?? {
      fill: chartTokens.color.chart.positive,
      border: chartTokens.color.chart.positive,
    },
    fall: s.fall ?? {
      fill: chartTokens.color.chart.negative,
      border: chartTokens.color.chart.negative,
    },
  };

  const valuesForExtent = series.values.flatMap((v) => v);
  const grid = normalizePadding(option.padding);
  const xAxis = normalizeXAxis(option.x, series.values.length);
  const yAxis = normalizeYAxis(option.y, valuesForExtent);

  const internal: InternalCartesianOption = {
    id,
    width: option.width,
    height: option.height,
    animationDuration: option.animationDuration ?? 0,
    grid,
    xAxis,
    yAxis,
    xIntervalType: 'line',
    dataset: series,
  };

  return { id, series, internal, xAxis, yAxis };
}

export function resolveMultiOption(option: MultiChartOption, id: string) {
  const series: ResolvedMultiSeries[] = option.series.map((s) => {
    if (s.type === 'line') {
      const segmentColor =
        s.lineStyle?.segmentColor ??
        (s.lineStyle?.segmentArea
          ? { above: chartTokens.color.chart.positive, below: chartTokens.color.chart.negative }
          : undefined);
      const lineStyle = s.lineStyle
        ? {
            zeroValue: s.lineStyle.zeroValue ?? 0,
            segmentColor,
            segmentArea: s.lineStyle.segmentArea,
          }
        : undefined;
      return {
        ...s,
        smooth: s.smooth ?? 0,
        color: s.color ?? chartTokens.color.chart.line,
        width: s.width ?? chartTokens.stroke.width.line,
        points: s.points ?? false,
        pointSize: s.pointSize ?? chartTokens.size.point,
        lineStyle,
      };
    }
    if (s.type === 'bar') {
      return {
        ...s,
        colors: s.colors ?? chartTokens.color.chart.bar,
        radius: s.radius ?? chartTokens.shape.radius.bar,
        shift: s.shift ?? 0,
        labels: s.labels ?? false,
        labelFormatter: s.labelFormatter ?? ((v: number) => v),
        labelColor: s.labelColor ?? chartTokens.color.text.secondary,
        labelFontSize: s.labelFontSize ?? chartTokens.typography.fontSize.axis,
        labelGap: s.labelGap ?? chartTokens.spacing.label.gap,
        zero: s.zero ?? Number.NaN,
      };
    }
    return {
      ...s,
      rise: s.rise ?? {
        fill: chartTokens.color.chart.positive,
        border: chartTokens.color.chart.positive,
      },
      fall: s.fall ?? {
        fill: chartTokens.color.chart.negative,
        border: chartTokens.color.chart.negative,
      },
    };
  });

  const valuesForExtent = series.flatMap((s) => {
    switch (s.type) {
      case 'line':
        return s.values.filter((v): v is number => typeof v === 'number' && !Number.isNaN(v));
      case 'bar':
        return s.values;
      case 'candle':
        return s.values.flatMap((v) => v);
      default:
        return [];
    }
  });

  const grid = normalizePadding(option.padding);
  const maxLen = Math.max(
    ...series.map((s) => {
      switch (s.type) {
        case 'line':
          return s.values.length;
        case 'bar':
          return s.values.length;
        case 'candle':
          return s.values.length;
        default:
          return 0;
      }
    }),
    0,
  );
  const xAxis = normalizeXAxis(option.x, maxLen);
  const yAxis = normalizeYAxis(option.y, valuesForExtent);

  series.forEach((s) => {
    if (s.type === 'bar') {
      if (Number.isNaN(s.zero)) {
        s.zero = yAxis.min;
      }
    }
  });

  const internal: InternalCartesianOption = {
    id,
    width: option.width,
    height: option.height,
    animationDuration: option.animationDuration ?? 0,
    grid,
    xAxis,
    yAxis,
    xIntervalType: 'line',
    dataset: series as unknown,
  };

  return { id, series, internal, xAxis, yAxis };
}

export function resolveRadarOption(option: RadarChartOption) {
  return {
    indicator: option.indicator.map((v) => ({
      ...v,
      shiftX: v.shiftX ?? 0,
      shiftY: v.shiftY ?? 0,
    })),
    shape: option.shape ?? 'polygon',
    padding: option.padding ?? chartTokens.spacing.chartPadding,
    splitNumber: option.splitNumber ?? 3,
    indicatorStyle: {
      fontSize: option.indicatorStyle?.fontSize ?? chartTokens.typography.fontSize.axis,
      fontColor: option.indicatorStyle?.fontColor ?? chartTokens.color.text.secondary,
      gap: option.indicatorStyle?.gap ?? chartTokens.spacing.radar.indicatorGap,
    },
    axisLine: {
      show: option.axisLine?.show ?? true,
      width: option.axisLine?.width ?? chartTokens.stroke.width.axisLine,
      color: option.axisLine?.color ?? chartTokens.color.chart.axisLine,
      dash: option.axisLine?.dash,
    },
    splitLine: {
      width: option.splitLine?.width ?? chartTokens.stroke.width.axisLine,
      color: option.splitLine?.color ?? chartTokens.color.grid.line,
      dash: option.splitLine?.dash,
    },
  };
}
