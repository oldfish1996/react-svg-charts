import React from 'react';
import { parseColor, calcTextWidth } from '../../utils';
import { calcPolygonVertices, calcPointpath, getTranslate } from './util';
import { CircleCoords, PolygonCoords } from './coords';
import { FONT_SIZE_INIT } from '../common/constant';
import { normalizePadding } from '../common/normalize';
import type { RadarChartOption } from '../../api';
import { chartTokens } from '../../options/tokens';
import { resolveRadarOption } from '../../options/resolve';

export type { RadarChartOption };

export interface RadarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  option: RadarChartOption;
}

export const RadarChart: React.FC<RadarChartProps> = ({ option, style, className, ...rest }) => {
  const { width, height, dataset } = option;
  const splitAreaColors = option.splitArea?.color;

  const { indicator, shape, padding, splitNumber, indicatorStyle, axisLine, splitLine } =
    resolveRadarOption(option);
  const grid = normalizePadding(padding);
  const gridTop = grid.top;
  const gridRight = grid.right;
  const gridBottom = grid.bottom;
  const gridLeft = grid.left;

  const textFontsize = indicatorStyle.fontSize ?? FONT_SIZE_INIT;
  const gap = indicatorStyle.gap ?? 6;

  const indicatorWidth = indicator
    .map((v) => v.text)
    .map((v) => {
      if (Array.isArray(v)) {
        let maxW = calcTextWidth(v[0], textFontsize);
        v.forEach((vi) => {
          maxW = Math.max(maxW, calcTextWidth(vi, textFontsize));
        });
        return maxW;
      }
      return calcTextWidth(v, textFontsize);
    });

  const n = indicator.length;
  const rightWidth = (indicatorWidth[Math.floor(n / 4)] || 0) + gap + gridRight;
  const leftWidth = (indicatorWidth[Math.ceil((3 * n) / 4)] || 0) + gap + gridLeft;

  const topHeight = textFontsize * 1.4 + gap + gridTop;
  const bottomHeight = n % 2 ? gridBottom : topHeight + gap + gridBottom;

  const rowR = (width - rightWidth - leftWidth) / 2;
  const colR = (height - topHeight - bottomHeight) / 2;
  const r = Math.min(rowR, colR);

  const cpX = leftWidth + r;
  const cpY = (height + topHeight) / 2;

  const valuesMax = indicator.map((v) => v.max);

  const valuesPaths = dataset.map((v) => ({
    ...calcPointpath(v.values, valuesMax, n, r, { cpX, cpY }),
    lineColor: v?.lineStyle?.color || chartTokens.color.chart.radar,
    lineWidth: v?.lineStyle?.width || 1,
    lineDash: v?.lineStyle?.dash,
    symbolColor: v?.symbol?.color || v?.lineStyle?.color || chartTokens.color.chart.radar,
    symbolWidth: v?.symbol?.width || 3,
    symbolBorderWidth: v?.symbol?.border?.width,
    symbolBorderColor: v?.symbol?.border?.color || '#fff',
    areaColor: v.areaColor ? parseColor(v.areaColor).rgb : 'none',
    areaColorOpacity: v.areaColor ? parseColor(v.areaColor).opacity : 'none',
  }));

  const radialPoint = calcPolygonVertices(cpX, cpY, r, n, { x: cpX, y: cpY - r });

  const radialIndicators = indicator.map((v, index) => {
    const { text, shiftX, shiftY } = v;
    const radialPointX = radialPoint[index].x;
    const radialPointY = radialPoint[index].y;
    const flag = index < n / 2 ? 1 : -1;
    return {
      radialPointX,
      radialPointY,
      radialPath: `M${cpX} ${cpY}L${radialPoint[index].x} ${radialPoint[index].y}`,
      label: Array.isArray(text)
        ? text.map((t) => ({
            txt: t,
            shift: (flag * ((indicatorWidth[index] || 0) - calcTextWidth(t, textFontsize))) / 2,
          }))
        : text,
      shiftX,
      shiftY,
      ...getTranslate(index, n, gap),
    };
  });

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        fontSize: 0,
        ...style,
      }}
      {...rest}
    >
      <svg width={width} height={height}>
        {shape === 'circle' ? (
          <CircleCoords
            r={r}
            cp={{ cpX, cpY }}
            splitNumber={splitNumber}
            colors={splitAreaColors}
            splitLine={splitLine}
          />
        ) : (
          <PolygonCoords
            r={r}
            n={n}
            cp={{ cpX, cpY }}
            splitNumber={splitNumber}
            colors={splitAreaColors}
            splitLine={splitLine}
          />
        )}

        {radialIndicators.map((v, index) => (
          <React.Fragment key={index}>
            {axisLine.show ? (
              <path
                d={v.radialPath}
                stroke={parseColor(axisLine.color || chartTokens.color.chart.axisLine).rgb}
                strokeOpacity={
                  parseColor(axisLine.color || chartTokens.color.chart.axisLine).opacity
                }
                strokeWidth={axisLine.width}
                strokeDasharray={axisLine.dash}
                strokeLinejoin="round"
              />
            ) : null}
            <text
              textAnchor={v.align}
              dominantBaseline={v.baseline}
              x={v.radialPointX + v.translateX + v.shiftX}
              y={v.radialPointY + v.translateY + v.shiftY}
              fill={indicatorStyle.fontColor}
              style={{
                fontSize: `${textFontsize}px`,
                fontFamily: chartTokens.typography.fontFamily.sans,
              }}
            >
              {Array.isArray(v.label) ? (
                <>
                  {v.label.map(({ txt, shift }, idx) => (
                    <tspan
                      key={idx}
                      x={v.radialPointX + v.translateX + shift}
                      dy={idx ? '1.3em' : undefined}
                    >
                      {txt}
                    </tspan>
                  ))}
                </>
              ) : (
                v.label
              )}
            </text>
          </React.Fragment>
        ))}

        {valuesPaths.map((v, index) => (
          <React.Fragment key={index}>
            <path
              d={v.valuesPath}
              stroke={v.lineColor}
              strokeWidth={v.lineWidth}
              strokeDasharray={v.lineDash}
              fill={v.areaColor}
              fillOpacity={v.areaColorOpacity}
            />
            {v.valuesPoints.map((p, idx) => (
              <React.Fragment key={idx}>
                {v.symbolBorderWidth ? (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={v.symbolBorderWidth + v.symbolWidth}
                    fill={v.symbolBorderColor}
                  />
                ) : null}
                <circle cx={p.x} cy={p.y} r={v.symbolWidth} fill={v.symbolColor} />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default RadarChart;
