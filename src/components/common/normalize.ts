import type { XAxisOption, YAxisOption } from './types';
import { FONT_SIZE_INIT } from './constant';
import type { SimpleXAxis, SimpleYAxis, ChartPadding } from '../../api';
import { chartTokens } from '../../options/tokens';

export function normalizePadding(padding: ChartPadding | undefined) {
  if (typeof padding === 'number') {
    return { top: padding, right: padding, bottom: padding, left: padding };
  }
  return {
    top: padding?.top ?? chartTokens.spacing.chartPadding.top,
    right: padding?.right ?? chartTokens.spacing.chartPadding.right,
    bottom: padding?.bottom ?? chartTokens.spacing.chartPadding.bottom,
    left: padding?.left ?? chartTokens.spacing.chartPadding.left,
  };
}

export function normalizeXAxis(x: SimpleXAxis | undefined, count: number): XAxisOption {
  const labels = x?.labels ?? Array.from({ length: Math.max(count, 0) }).map((_, i) => `${i + 1}`);
  const fontSize = x?.axisLabel?.fontSize ?? x?.fontSize ?? FONT_SIZE_INIT;
  const color = x?.axisLabel?.color ?? x?.color ?? chartTokens.color.text.secondary;
  const show = x?.axisLabel?.show ?? true;
  const margin = show ? x?.axisLabel?.margin ?? x?.margin ?? chartTokens.spacing.axis.xLabelMargin : 0;
  const formatter = x?.axisLabel?.formatter ?? ((label: string) => label);
  const rotate = x?.axisLabel?.rotate ?? 0;
  const interval = x?.axisLabel?.interval ?? 0;
  const gap = x?.gap;

  return {
    data: labels.map((label) => ({ label, value: label, style: { align: 'middle' } })),
    axisLabel: { show, fontSize, color, margin, formatter, rotate, interval },
    gap,
    axisLine: x?.axisLine
      ? {
          show: x.axisLine.show ?? true,
          width: x.axisLine.width,
          color: x.axisLine.color,
          dash: x.axisLine.dash,
        }
      : undefined,
    axisTick: x?.axisTick
      ? {
          show: x.axisTick.show ?? true,
          length: x.axisTick.length ?? 4,
          color: x.axisTick.color ?? chartTokens.color.grid.line,
          width: x.axisTick.width ?? chartTokens.stroke.width.grid,
        }
      : undefined,
    splitLine: x?.splitLine
      ? {
          show: x.splitLine.show ?? true,
          width: x.splitLine.width,
          color: x.splitLine.color,
          dash: x.splitLine.dash,
        }
      : undefined,
  };
}

function extent(values: number[]) {
  if (!values.length) {
    return { min: 0, max: 1 };
  }
  let min = values[0];
  let max = values[0];
  for (const v of values) {
    if (v < min) min = v;
    if (v > max) max = v;
  }
  if (min === max) {
    const delta = Math.abs(min) || 1;
    return { min: min - delta * 0.1, max: max + delta * 0.1 };
  }
  const pad = (max - min) * 0.05;
  return { min: min - pad, max: max + pad };
}

export function normalizeYAxis(y: SimpleYAxis | undefined, valuesForExtent: number[]): YAxisOption {
  const { min: autoMin, max: autoMax } = extent(valuesForExtent);
  const min = y?.min ?? autoMin;
  const max = y?.max ?? autoMax;
  const splitNum = y?.splitNum ?? chartTokens.axis.ySplitNum;

  return {
    min,
    max,
    splitNum,
    axisLabel: {
      align: y?.align ?? 'right',
      baseline: 'central',
      baselineGap: 0,
      show: y?.axisLabel?.show ?? true,
      formatter: y?.axisLabel?.formatter ?? y?.labelFormatter ?? ((v: number) => v),
      color: y?.axisLabel?.color ?? y?.color ?? chartTokens.color.text.secondary,
      fontSize: y?.axisLabel?.fontSize ?? y?.fontSize ?? FONT_SIZE_INIT,
      margin:
        (y?.axisLabel?.show ?? true)
          ? y?.axisLabel?.margin ?? y?.margin ?? chartTokens.spacing.axis.yLabelMargin
          : 0,
      formatterSide: () => '',
      marginSide: 0,
    },
    splitLine: {
      show: y?.splitLine?.show ?? true,
      color: y?.splitLine?.color ?? chartTokens.color.grid.line,
      width: y?.splitLine?.width ?? chartTokens.stroke.width.grid,
      containLabel: y?.splitLine?.containLabel ?? false,
      omitBottomLine: y?.splitLine?.omitBottomLine ?? false,
      dash: y?.splitLine?.dash,
    },
    axisLine: y?.axisLine
      ? {
          show: y.axisLine.show ?? true,
          width: y.axisLine.width,
          color: y.axisLine.color,
          dash: y.axisLine.dash,
        }
      : undefined,
    axisTick: y?.axisTick
      ? {
          show: y.axisTick.show ?? true,
          length: y.axisTick.length ?? 4,
          color: y.axisTick.color ?? chartTokens.color.grid.line,
          width: y.axisTick.width ?? chartTokens.stroke.width.grid,
        }
      : undefined,
    emphasisValueLine: y?.emphasisValueLine,
  };
}
