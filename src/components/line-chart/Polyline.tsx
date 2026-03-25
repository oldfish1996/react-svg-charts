import React from 'react';
import { buildPath, parseColor } from '../../utils';
import type { BaseData } from '../common/format';
import type { LineSeries } from '../../api';

type ResolvedLineSeries = LineSeries & {
  smooth: number;
  color: string;
  width: number;
  lineStyle?: {
    zeroValue: number;
    segmentColor?: { above: string; below: string };
    segmentArea?: { above: { start: string; end: string }; below: { start: string; end: string } };
  };
};

interface PolylineProps {
  data: ResolvedLineSeries;
  baseData: BaseData;
  index: number;
}

const Polyline: React.FC<PolylineProps> = ({ data, baseData, index }) => {
  const { id, max, min, polyHeight, pointStartX, xInterval, grid } = baseData;
  const { values, smooth, color, width, dash, area, lineStyle } = data;

  const points: number[] = [];
  const pointsXY: [number, number][] = [];

  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    if (typeof v !== 'number' || Number.isNaN(v)) {
      points.push(Number.NaN, Number.NaN);
      pointsXY.push([Number.NaN, Number.NaN]);
      continue;
    }
    const rv = max - v;
    const cx = pointStartX + i * xInterval;
    const cy = rv * (polyHeight / (max - min)) + grid.top;
    points.push(cx, cy);
    pointsXY.push([cx, cy]);
  }

  const ratio = polyHeight / (max - min || 1);
  const defaultFillToY = grid.top + polyHeight;
  const baselineValue = lineStyle?.zeroValue;
  const baselineY =
    typeof baselineValue === 'number' ? (max - baselineValue) * ratio + grid.top : defaultFillToY;

  let start = 0;
  let path = '';
  let colorPath = '';
  while (start < points.length / 2) {
    const { segPath, k } = buildPath(points, start, smooth);
    if (segPath) {
      path += segPath;
      const endIdx = k + start - 1;
      if (pointsXY[endIdx] && pointsXY[start]) {
        colorPath += `${segPath}L${pointsXY[endIdx][0].toFixed(4)} ${baselineY.toFixed(
          4,
        )}L${pointsXY[start][0].toFixed(4)} ${baselineY.toFixed(4)}Z`;
      }
    }
    start += k + 1;
  }

  const segmentColor = lineStyle?.segmentColor;
  const segmentArea = lineStyle?.segmentArea;
  const segmented = Boolean(segmentColor);
  const aboveGradId = `seg_area_above_${id}_${index}`;
  const belowGradId = `seg_area_below_${id}_${index}`;

  const segmentPaths = segmented
    ? buildSegmentedPaths({
        values,
        smooth,
        max,
        ratio,
        gridTop: grid.top,
        pointStartX,
        xInterval,
        baselineValue: baselineValue ?? 0,
      })
    : null;

  return (
    <>
      <defs>
        {area ? (
          <linearGradient
            id={`area_color_${id}_${index}`}
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={parseColor(area.start).rgb}
              stopOpacity={parseColor(area.start).opacity}
            />
            <stop
              offset="100%"
              stopColor={parseColor(area.end).rgb}
              stopOpacity={parseColor(area.end).opacity}
            />
          </linearGradient>
        ) : null}
        {segmented && segmentArea ? (
          <>
            <linearGradient
              id={aboveGradId}
              gradientUnits="objectBoundingBox"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor={parseColor(segmentArea.above.start).rgb}
                stopOpacity={parseColor(segmentArea.above.start).opacity}
              />
              <stop
                offset="100%"
                stopColor={parseColor(segmentArea.above.end).rgb}
                stopOpacity={parseColor(segmentArea.above.end).opacity}
              />
            </linearGradient>
            <linearGradient
              id={belowGradId}
              gradientUnits="objectBoundingBox"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor={parseColor(segmentArea.below.start).rgb}
                stopOpacity={parseColor(segmentArea.below.start).opacity}
              />
              <stop
                offset="100%"
                stopColor={parseColor(segmentArea.below.end).rgb}
                stopOpacity={parseColor(segmentArea.below.end).opacity}
              />
            </linearGradient>
          </>
        ) : null}
      </defs>
      {segmented && segmentPaths ? (
        <>
          {segmentArea
            ? segmentPaths.below.map((p, i) => (
                <path key={`b_fill_${i}`} d={p.areaPath} fill={`url(#${belowGradId})`} />
              ))
            : null}
          {segmentArea
            ? segmentPaths.above.map((p, i) => (
                <path key={`a_fill_${i}`} d={p.areaPath} fill={`url(#${aboveGradId})`} />
              ))
            : null}

          {segmentPaths.below.map((p, i) => (
            <path
              key={`b_${i}`}
              d={p.strokePath}
              fill="transparent"
              stroke={parseColor(segmentColor!.below).rgb}
              strokeOpacity={parseColor(segmentColor!.below).opacity}
              strokeWidth={width}
              strokeDasharray={dash}
              strokeLinejoin="bevel"
            />
          ))}
          {segmentPaths.above.map((p, i) => (
            <path
              key={`a_${i}`}
              d={p.strokePath}
              fill="transparent"
              stroke={parseColor(segmentColor!.above).rgb}
              strokeOpacity={parseColor(segmentColor!.above).opacity}
              strokeWidth={width}
              strokeDasharray={dash}
              strokeLinejoin="bevel"
            />
          ))}
        </>
      ) : (
        <>
          {area ? <path d={colorPath} fill={`url(#area_color_${id}_${index})`} /> : null}
          <path
            d={path}
            fill="transparent"
            stroke={parseColor(color).rgb}
            strokeWidth={width}
            strokeOpacity={parseColor(color).opacity}
            strokeDasharray={dash}
            strokeLinejoin="bevel"
          />
        </>
      )}
    </>
  );
};

export default Polyline;

type SegPath = { strokePath: string; areaPath: string };

function buildSegmentedPaths(input: {
  values: Array<number | undefined>;
  smooth: number;
  max: number;
  ratio: number;
  gridTop: number;
  pointStartX: number;
  xInterval: number;
  baselineValue: number;
}) {
  const { values, smooth, max, ratio, gridTop, pointStartX, xInterval, baselineValue } = input;
  const baselineY = (max - baselineValue) * ratio + gridTop;

  type Side = 'above' | 'below';
  type Point = { x: number; y: number; v: number };

  const out: { above: SegPath[]; below: SegPath[] } = { above: [], below: [] };

  const aboveSegments: Point[][] = [];
  const belowSegments: Point[][] = [];

  let prev: Point | null = null;
  let prevSide: Side | null = null;
  let curr: Point[] | null = null;
  let currSide: Side | null = null;

  function close() {
    if (curr && curr.length >= 2 && currSide) {
      if (currSide === 'above') {
        aboveSegments.push(curr);
      } else {
        belowSegments.push(curr);
      }
    }
    curr = null;
    currSide = null;
  }

  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    if (typeof v !== 'number' || Number.isNaN(v)) {
      close();
      prev = null;
      prevSide = null;
      continue;
    }

    const x = pointStartX + i * xInterval;
    const y = (max - v) * ratio + gridTop;
    const side: Side = v >= baselineValue ? 'above' : 'below';
    const cur: Point = { x, y, v };

    if (!prev) {
      curr = [cur];
      currSide = side;
      prev = cur;
      prevSide = side;
      continue;
    }

    if (prevSide === side) {
      if (!curr) {
        curr = [prev, cur];
        currSide = side;
      } else {
        curr.push(cur);
      }
    } else {
      const denom = cur.v - prev.v;
      const t = denom === 0 ? 0.5 : (baselineValue - prev.v) / denom;
      const xi = prev.x + (cur.x - prev.x) * t;
      const inter: Point = { x: xi, y: baselineY, v: baselineValue };

      if (!curr) {
        curr = [prev];
        currSide = prevSide;
      }
      curr.push(inter);
      close();

      curr = [inter, cur];
      currSide = side;
    }

    prev = cur;
    prevSide = side;
  }

  close();

  function toSegPath(seg: Point[]) {
    const pts: number[] = [];
    for (const p of seg) {
      pts.push(p.x, p.y);
    }
    const { segPath } = buildPath(pts, 0, smooth);
    const firstX = seg[0]!.x;
    const lastX = seg[seg.length - 1]!.x;
    const areaPath = `${segPath}L${lastX.toFixed(4)} ${baselineY.toFixed(4)}L${firstX.toFixed(
      4,
    )} ${baselineY.toFixed(4)}Z`;
    return { strokePath: segPath, areaPath };
  }

  out.above = aboveSegments.map(toSegPath).filter((p) => p.strokePath);
  out.below = belowSegments.map(toSegPath).filter((p) => p.strokePath);

  return out;
}
