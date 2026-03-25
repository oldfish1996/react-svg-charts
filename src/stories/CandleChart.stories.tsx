import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CandleChart } from '../index';
import type { CandleChartOption } from '../index';
import { OptionTable } from '../docs/components/OptionTable';
import { candleOptionMeta } from '../docs/option-meta/candle';
import { OptionToggle } from './OptionToggle';

const meta: Meta<typeof CandleChart> = {
  title: 'Charts/CandleChart',
  component: CandleChart,
};

export default meta;

type Story = StoryObj<typeof CandleChart>;

const option: CandleChartOption = {
  width: 360,
  height: 200,
  padding: 12,
  animationDuration: 0,
  x: {
    labels: Array.from({ length: 10 }).map((_, i) => `D${i + 1}`),
    fontSize: 10,
    color: '#5e6570',
    margin: 4,
  },
  y: {
    min: 80,
    max: 140,
    splitNum: 4,
    align: 'right',
    color: '#5e6570',
    fontSize: 10,
    margin: 8,
    labelFormatter: (v: number) => v,
  },
  series: {
    values: [
      [100, 110, 95, 120],
      [110, 105, 100, 125],
      [105, 118, 102, 130],
      [118, 112, 108, 135],
      [112, 125, 110, 138],
      [125, 120, 115, 140],
      [120, 128, 118, 139],
      [128, 132, 120, 137],
      [132, 126, 122, 136],
      [126, 134, 124, 138],
    ],
  },
};

export const Basic: Story = {
  args: { option },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <CandleChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const CustomColors: Story = {
  args: {
    option: {
      width: 360,
      height: 200,
      padding: 12,
      animationDuration: 0,
      x: {
        labels: Array.from({ length: 10 }).map((_, i) => `D${i + 1}`),
        fontSize: 10,
        color: '#5e6570',
        margin: 4,
      },
      y: {
        min: 80,
        max: 140,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: (v: number) => v,
      },
      series: {
        values: option.series.values,
        rise: { fill: 'rgba(0,122,255,0.25)', border: '#007AFF' },
        fall: { fill: 'rgba(240,65,66,0.22)', border: '#f04142' },
        candleWidth: 14,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <CandleChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const Option: Story = {
  render: () => <OptionTable meta={candleOptionMeta} />,
};
