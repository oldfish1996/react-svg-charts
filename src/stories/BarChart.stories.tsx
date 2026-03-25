import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from '../index';
import type { BarChartOption } from '../index';
import { OptionTable } from '../docs/components/OptionTable';
import { barOptionMeta } from '../docs/option-meta/bar';
import { OptionToggle } from './OptionToggle';

const meta: Meta<typeof BarChart> = {
  title: 'Charts/BarChart',
  component: BarChart,
};

export default meta;

type Story = StoryObj<typeof BarChart>;

const option: BarChartOption = {
  width: 360,
  height: 200,
  padding: 12,
  animationDuration: 600,
  x: {
    labels: Array.from({ length: 10 }).map((_, i) => `T${i + 1}`),
    fontSize: 10,
    color: '#5e6570',
    margin: 4,
  },
  y: {
    min: 0,
    max: 100,
    splitNum: 4,
    align: 'right',
    color: '#5e6570',
    fontSize: 10,
    margin: 8,
    labelFormatter: (v: number) => v,
  },
  series: {
    values: [12, 40, 35, 20, 62, 77, 55, 31, 90, 66],
    colors: '#ff403a',
    radius: 2,
    labels: true,
    labelFontSize: 10,
    labelGap: 4,
  },
};

export const Basic: Story = {
  args: { option },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <BarChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

const positiveNegativeValues = [30, -15, 55, -28, 60, -12, 42, -44, 70, -10, 10, -22];
const positiveNegativeColors = positiveNegativeValues.map((v) => (v < 0 ? '#2da822' : '#f04142'));

export const PositiveNegative: Story = {
  args: {
    option: {
      width: 360,
      height: 200,
      padding: 12,
      animationDuration: 600,
      x: {
        labels: Array.from({ length: 12 }).map((_, i) => `D${i + 1}`),
        fontSize: 10,
        color: '#5e6570',
        margin: 4,
      },
      y: {
        min: -80,
        max: 80,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: (v: number) => v,
      },
      series: {
        values: positiveNegativeValues,
        colors: positiveNegativeColors,
        radius: 2,
        labels: true,
        labelGap: 4,
        zero: 0,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <BarChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const Option: Story = {
  render: () => <OptionTable meta={barOptionMeta} />,
};
