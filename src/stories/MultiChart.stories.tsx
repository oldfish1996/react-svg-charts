import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MultiChart } from '../index';
import type { MultiChartOption } from '../index';
import { OptionTable } from '../docs/components/OptionTable';
import { multiOptionMeta } from '../docs/option-meta/multi';
import { OptionToggle } from './OptionToggle';

const meta: Meta<typeof MultiChart> = {
  title: 'Charts/MultiChart',
  component: MultiChart,
};

export default meta;

type Story = StoryObj<typeof MultiChart>;

const option: MultiChartOption = {
  width: 360,
  height: 200,
  padding: 12,
  animationDuration: 0,
  x: {
    labels: Array.from({ length: 8 }).map((_, i) => `P${i + 1}`),
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
  series: [
    {
      type: 'bar',
      values: [15, 22, 30, 18, 40, 55, 48, 65],
      colors: 'rgba(0,122,255,0.35)',
      radius: 2,
    },
    {
      type: 'line',
      values: [10, 18, 35, 28, 60, 55, 80, 75],
      smooth: 0.2,
      color: '#f04142',
      width: 1.5,
      points: true,
      pointSize: 5,
    },
  ],
};

export const Basic: Story = {
  args: { option },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <MultiChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const WithCandle: Story = {
  args: {
    option: {
      width: 360,
      height: 220,
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
        max: 150,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: (v: number) => v,
      },
      series: [
        {
          type: 'candle',
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
        {
          type: 'line',
          values: [102, 108, 115, 118, 121, 126, 128, 130, 129, 134],
          smooth: 0.15,
          color: '#007AFF',
          width: 1.5,
          points: true,
          pointSize: 5,
        },
      ],
    },
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <MultiChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const MultipleBarsWithLine: Story = {
  args: {
    option: {
      width: 420,
      height: 260,
      padding: { top: 30, right: 44, bottom: 30, left: 34 },
      animationDuration: 0,
      x: {
        labels: ['2023FY', '2024Q1', '2024H1', '2024Q9', '2024FY'],
        fontSize: 12,
        color: '#5e6570',
        margin: 6,
      },
      y: {
        min: 0,
        max: 100,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: () => '',
        splitLine: { show: false },
      },
      series: [
        {
          type: 'bar',
          values: [90, 40, 60, 50, 55],
          colors: 'rgba(240,65,66,0.14)',
          barWidth: 10,
          radius: 2,
          shift: -14,
          labels: true,
          labelColor: 'rgba(0,0,0,0.85)',
          labelFontSize: 12,
          labelGap: 6,
        },
        {
          type: 'bar',
          values: [10, 20, 30, 10, 25],
          colors: 'rgba(45,168,34,0.14)',
          barWidth: 10,
          radius: 2,
          shift: 0,
          labels: true,
          labelColor: 'rgba(0,0,0,0.85)',
          labelFontSize: 12,
          labelGap: 6,
        },
        {
          type: 'bar',
          values: [15, 25, 35, 15, 30],
          colors: 'rgba(0,122,255,0.14)',
          barWidth: 10,
          radius: 2,
          shift: 14,
          labels: true,
          labelColor: 'rgba(0,0,0,0.85)',
          labelFontSize: 12,
          labelGap: 6,
        },
        {
          type: 'line',
          values: [10, 60, 90, 80, 80],
          smooth: 0.35,
          color: 'rgba(255,122,0,0.22)',
          width: 3,
          points: true,
          pointSize: 5,
        },
      ],
    },
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <MultiChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const Option: Story = {
  render: () => <OptionTable meta={multiOptionMeta} />,
};
