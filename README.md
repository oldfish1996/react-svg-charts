# react-svg-charts

React SVG chart components: LineChart, BarChart, CandleChart, RadarChart, MultiChart.

## Features

- SVG-based, framework-friendly chart components
- Multiple chart types: line, bar, candlestick, radar, and mixed (multi) charts
- TypeScript-first option APIs
- Basic interactions (axis pointer / tooltip) via `interaction`
- Storybook for local development and examples

## Install

```bash
npm i @oldfish1996/react-svg-charts
```

## Usage

```tsx
import React from 'react';
import { LineChart } from '@oldfish1996/react-svg-charts';

export function BasicLine() {
  return (
    <LineChart
      width={600}
      height={320}
      x={{ labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      series={{ values: [120, 200, 150, 80, 70] }}
    />
  );
}
```

## API (high level)

- `LineChart` / `LineChartOption` / `LineSeries`
- `BarChart` / `BarChartOption` / `BarSeries`
- `CandleChart` / `CandleChartOption` / `CandleSeries`
- `MultiChart` / `MultiChartOption` / `MultiSeries`
- `RadarChart` / `RadarChartOption` / `RadarIndicator`

## Links

- Storybook: https://oldfish1996.github.io/react-svg-charts/

## Development

- `pnpm install`
- `pnpm build`
- `pnpm storybook`
