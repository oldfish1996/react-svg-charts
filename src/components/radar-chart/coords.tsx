import React from 'react';
import { calcPolygonVertices } from './util';
import { parseColor } from '../../utils';

export function CircleCoords({
  r,
  cp,
  splitNumber,
  colors,
  splitLine,
}: {
  r: number;
  cp: { cpX: number; cpY: number };
  splitNumber: number;
  colors?: string[];
  splitLine: { width: number; color: string; dash?: string };
}) {
  const { cpX, cpY } = cp;
  const top = cpY - r;
  const bottom = cpY + r;
  const interval = (1 / splitNumber) * r;
  const radiusArr = Array.from({ length: splitNumber }).map(
    (_, index) => (1 - index / splitNumber) * r,
  );

  const circleAreaPaths = radiusArr.map((_, index) => {
    const rr = radiusArr[index];
    if (index < splitNumber - 1) {
      const rNext = radiusArr[index + 1];
      return `M${cpX} ${top + index * interval}
              A${rr} ${rr} 0 1 1 ${cpX} ${bottom - index * interval}
              A${rr} ${rr} 0 1 1 ${cpX} ${top + index * interval}
              M${cpX} ${top + (index + 1) * interval}
              A${rNext} ${rNext} 0 1 0 ${cpX} ${bottom - (index + 1) * interval}
              A${rNext} ${rNext} 0 1 0 ${cpX} ${top + (index + 1) * interval}`;
    }
    return `M${cpX} ${top + index * interval}
              A${rr} ${rr} 0 1 1 ${cpX} ${bottom - index * interval}
              A${rr} ${rr} 0 1 1 ${cpX} ${top + index * interval}`;
  });

  const splitLinePath = radiusArr.reduce(
    (pre, cur, index) =>
      `${pre}M${cpX} ${top + index * interval}
     A${cur} ${cur} 0 1 1 ${cpX} ${bottom - index * interval}
     A${cur} ${cur} 0 1 1 ${cpX} ${top + index * interval}`,
    '',
  );

  const { width, color, dash } = splitLine;
  const { rgb, opacity } = parseColor(color);

  return (
    <>
      {Array.isArray(colors)
        ? circleAreaPaths.map((v, index) => (
            <path key={index} d={v} fill={colors[index] ? colors[index] : 'none'} />
          ))
        : null}
      <path
        d={splitLinePath}
        fill="none"
        strokeWidth={width}
        stroke={rgb}
        strokeOpacity={opacity}
        strokeDasharray={dash}
      />
    </>
  );
}

export function PolygonCoords({
  r,
  n,
  cp,
  splitNumber,
  colors,
  splitLine,
}: {
  r: number;
  n: number;
  cp: { cpX: number; cpY: number };
  splitNumber: number;
  colors?: string[];
  splitLine: { width: number; color: string; dash?: string };
}) {
  const { cpX, cpY } = cp;
  const interval = (1 / splitNumber) * r;
  const radiusArr = Array.from({ length: splitNumber }).map(
    (_, index) => (1 - index / splitNumber) * r,
  );

  const polygonPaths = radiusArr.map((_, index) => {
    const rr = radiusArr[index];
    const points = calcPolygonVertices(cpX, cpY, rr, n, { x: cpX, y: index * interval });
    const pointsPath = points.reduce((pre, cur, idx) => {
      if (idx === 0) return `${pre}M${cur.x} ${cur.y}`;
      if (idx === points.length - 1) return `${pre}L${cur.x} ${cur.y}Z`;
      return `${pre}L${cur.x} ${cur.y}`;
    }, '');

    if (index < splitNumber - 1) {
      const rNext = radiusArr[index + 1];
      const pointsNext = calcPolygonVertices(cpX, cpY, rNext, n, {
        x: cpX,
        y: (index + 1) * interval,
      });
      const pointsPathNext = pointsNext.reduce((pre, cur, idx) => {
        if (idx === 0) return `${pre}M${cur.x} ${cur.y}`;
        if (idx === points.length - 1) return `${pre}L${cur.x} ${cur.y}Z`;
        return `${pre}L${cur.x} ${cur.y}`;
      }, '');
      return pointsPath + pointsPathNext;
    }
    return pointsPath;
  });

  const splitLinePath = radiusArr.reduce((previous, current, index) => {
    const points = calcPolygonVertices(cpX, cpY, current, n, { x: cpX, y: index * interval });
    const pointsPath = points.reduce((pre, cur, idx) => {
      if (idx === 0) return `${pre}M${cur.x} ${cur.y}`;
      if (idx === points.length - 1) return `${pre}L${cur.x} ${cur.y}Z`;
      return `${pre}L${cur.x} ${cur.y}`;
    }, '');
    return previous + pointsPath;
  }, '');

  const { width, color, dash } = splitLine;
  const { rgb, opacity } = parseColor(color);

  return (
    <>
      {Array.isArray(colors)
        ? polygonPaths.map((v, index) => (
            <path
              key={index}
              fill={colors[index] ? colors[index] : 'none'}
              d={v}
              fillRule="evenodd"
            />
          ))
        : null}
      <path
        d={splitLinePath}
        fill="none"
        strokeWidth={width}
        stroke={rgb}
        strokeOpacity={opacity}
        strokeDasharray={dash}
      />
    </>
  );
}
