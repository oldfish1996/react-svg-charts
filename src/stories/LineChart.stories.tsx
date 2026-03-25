import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '../index';
import type { LineChartOption } from '../index';
import { OptionTable } from '../docs/components/OptionTable';
import { lineOptionMeta } from '../docs/option-meta/line';
import { OptionToggle } from './OptionToggle';

const meta: Meta<typeof LineChart> = {
  title: 'Charts/LineChart',
  component: LineChart,
};

export default meta;

type Story = StoryObj<typeof LineChart>;

const option: LineChartOption = {
  width: 360,
  height: 200,
  padding: 12,
  animationDuration: 600,
  x: {
    labels: Array.from({ length: 8 }).map((_, i) => `D${i + 1}`),
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
    values: [10, 18, 35, 28, 60, 55, 80, 75],
    smooth: 0.2,
    color: '#f04142',
    width: 1.5,
    area: { start: 'rgba(240,65,66,0.25)', end: 'rgba(240,65,66,0)' },
    points: true,
    pointSize: 5,
  },
};

export const Basic: Story = {
  args: { option },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const MultipleSeries: Story = {
  args: {
    option: {
      width: 360,
      height: 200,
      padding: 12,
      animationDuration: 0,
      x: {
        labels: Array.from({ length: 10 }).map((_, i) => `W${i + 1}`),
        fontSize: 10,
        color: '#5e6570',
        margin: 4,
      },
      y: {
        min: 0,
        max: 120,
        splitNum: 4,
        align: 'right',
        color: '#5e6570',
        fontSize: 10,
        margin: 8,
        labelFormatter: (v: number) => `${v}`,
      },
      series: [
        {
          values: [10, 18, 35, 28, 60, 55, 80, 75, 88, 96],
          smooth: 0.1,
          color: '#f04142',
          width: 1.5,
          points: true,
          pointSize: 5,
        },
        {
          values: [12, 24, 30, 40, 50, 68, 74, 92, 100, 112],
          smooth: 0,
          color: '#007AFF',
          width: 1.5,
          dash: '4 2',
          points: false,
          pointSize: 4,
        },
      ],
    },
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const MissingValues: Story = {
  args: {
    option: {
      width: 360,
      height: 200,
      padding: 12,
      animationDuration: 0,
      x: {
        labels: Array.from({ length: 12 }).map((_, i) => `D${i + 1}`),
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
        values: [10, 18, undefined, 28, 60, undefined, 80, 75, 62, 90, undefined, 70],
        smooth: 0.15,
        color: '#f04142',
        width: 1.5,
        points: true,
        pointSize: 5,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const SegmentedAreaLine: Story = {
  args: {
    option: (() => {
      const n = 180;
      const labels = Array.from({ length: n }).map(() => '');
      labels[0] = '09:30';
      labels[Math.floor((n - 1) / 2)] = '11:30/13:00';
      labels[n - 1] = '15:00';

      const baseline = 330;
      const values = Array.from({ length: n }).map((_, i) => {
        const t = i / (n - 1);
        const drift = t < 0.35 ? -t * 18 : (t - 0.35) * 36 - 0.35 * 18;
        const wave = Math.sin(i / 6) * 1.2 + Math.sin(i / 17) * 0.8;
        const bump = Math.max(0, t - 0.65) * 24;
        return baseline + drift + wave + bump;
      });

      return {
        width: 360,
        height: 240,
        padding: 12,
        animationDuration: 0,
        x: { labels, fontSize: 10, color: '#5e6570', margin: 4 },
        y: {
          min: 300,
          max: 360,
          splitNum: 4,
          align: 'right',
          color: '#5e6570',
          fontSize: 10,
          margin: 8,
          labelFormatter: (v: number) => v.toFixed(2),
        },
        series: {
          values,
          smooth: 0.12,
          width: 1.5,
          points: false,
          pointSize: 4,
          lineStyle: {
            zeroValue: baseline,
            segmentColor: { above: '#f04142', below: '#2da822' },
            segmentArea: {
              above: { start: 'rgba(240,65,66,0.16)', end: 'rgba(240,65,66,0)' },
              below: { start: 'rgba(45,168,34,0)', end: 'rgba(45,168,34,0.16)' },
            },
          },
        },
      } satisfies LineChartOption;
    })(),
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const AxisStyle: Story = {
  args: {
    option: {
      width: 360,
      height: 220,
      padding: { top: 12, right: 24, bottom: 22, left: 34 },
      animationDuration: 0,
      x: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { show: true, color: 'rgba(0,0,0,0.18)', width: 1 },
        axisTick: { show: true, length: 4, color: 'rgba(0,0,0,0.18)', width: 1 },
        axisLabel: {
          show: true,
          fontSize: 10,
          color: '#5e6570',
          margin: 6,
          interval: 0,
          formatter: (label) => label,
        },
      },
      y: {
        min: 0,
        max: 100,
        splitNum: 4,
        align: 'right',
        axisLine: { show: true, color: 'rgba(0,0,0,0.18)', width: 1 },
        axisTick: { show: true, length: 4, color: 'rgba(0,0,0,0.18)', width: 1 },
        splitLine: { show: true, dash: '4 4', color: 'rgba(0,0,0,0.12)', width: 1 },
        axisLabel: {
          show: true,
          fontSize: 10,
          color: '#5e6570',
          margin: 8,
          formatter: (v) => `${v}`,
        },
      },
      series: {
        values: [10, 18, 35, 28, 60, 55, 80],
        smooth: 0.12,
        color: '#f04142',
        width: 1.5,
        points: true,
        pointSize: 5,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const AxisLabelInterval: Story = {
  args: {
    option: {
      width: 360,
      height: 200,
      padding: 12,
      animationDuration: 0,
      x: {
        labels: Array.from({ length: 24 }).map((_, i) => `T${i + 1}`),
        gap: 12,
        axisLabel: { interval: 2, margin: 4 },
      },
      y: {
        min: 0,
        max: 100,
        splitNum: 4,
        align: 'right',
        splitLine: { show: false },
        axisLabel: { formatter: (v) => `${v}%` },
      },
      series: {
        values: Array.from({ length: 24 }).map((_, i) => Math.round(Math.sin(i / 3) * 30 + 50)),
        smooth: 0.2,
        color: '#007AFF',
        width: 1.5,
        points: false,
        pointSize: 4,
      },
    },
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <LineChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const Option: Story = {
  render: () => <OptionTable meta={lineOptionMeta} />,
};
