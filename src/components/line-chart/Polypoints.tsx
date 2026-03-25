import React from 'react';
import type { BaseData } from '../common/format';
import type { LineSeries } from '../../api';

type ResolvedLineSeries = LineSeries & {
  points: boolean;
  pointSize: number;
  color: string;
};

interface PolypointProps {
  data: ResolvedLineSeries;
  baseData: BaseData;
  index: number;
}

const Polypoints: React.FC<PolypointProps> = ({ data, baseData, index }) => {
  const { max, min, polyHeight, pointStartX, xInterval, grid } = baseData;
  const { values, points, pointSize, color } = data;

  const pointsXY: [number, number][] = [];
  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    if (typeof v !== 'number' || Number.isNaN(v)) {
      pointsXY.push([Number.NaN, Number.NaN]);
      continue;
    }
    const rv = max - v;
    const cx = pointStartX + i * xInterval;
    const cy = rv * (polyHeight / (max - min)) + grid.top;
    pointsXY.push([cx, cy]);
  }

  return (
    <>
      {pointsXY.map(([x, y], i) => {
        if (Number.isNaN(x) || Number.isNaN(y)) {
          return null;
        }
        if (!points) {
          return null;
        }

        return (
          <React.Fragment key={`${index}_${i}`}>
            <circle cx={x} cy={y} r={pointSize / 2} fill={color} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Polypoints;
