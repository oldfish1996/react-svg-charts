import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadarChart } from '../index';
import type { RadarChartOption } from '../index';
import { OptionTable } from '../docs/components/OptionTable';
import { radarOptionMeta } from '../docs/option-meta/radar';
import { OptionToggle } from './OptionToggle';

const meta: Meta<typeof RadarChart> = {
  title: 'Charts/RadarChart',
  component: RadarChart,
};

export default meta;

type Story = StoryObj<typeof RadarChart>;

const option: RadarChartOption = {
  width: 360,
  height: 320,
  shape: 'polygon',
  splitNumber: 4,
  padding: 8,
  indicatorStyle: { fontSize: 10, fontColor: '#5e6570', gap: 6 },
  indicator: [
    { text: 'A', max: 100 },
    { text: 'B', max: 100 },
    { text: 'C', max: 100 },
    { text: 'D', max: 100 },
    { text: 'E', max: 100 },
    { text: 'F', max: 100 },
  ],
  splitArea: {
    color: ['rgba(0,0,0,0.02)', 'rgba(0,0,0,0.04)', 'rgba(0,0,0,0.06)', 'rgba(0,0,0,0.08)'],
  },
  splitLine: { color: 'rgba(0,0,0,0.15)', width: 1 },
  axisLine: { show: true, color: 'rgba(0,0,0,0.18)', width: 1 },
  dataset: [
    {
      values: [60, 82, 45, 72, 55, 90],
      areaColor: 'rgba(0,122,255,0.15)',
      lineStyle: { color: '#007AFF', width: 1.5 },
      symbol: { width: 3, color: '#007AFF', border: { width: 1.5, color: '#fff' } },
    },
  ],
};

export const Basic: Story = {
  args: { option },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <RadarChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const Circle: Story = {
  args: {
    option: {
      ...option,
      shape: 'circle',
      splitNumber: 5,
      splitLine: { color: 'rgba(0,0,0,0.12)', width: 1, dash: '4 2' },
      axisLine: { show: true, color: 'rgba(0,0,0,0.18)', width: 1, dash: '2 2' },
      dataset: [
        {
          values: [35, 68, 72, 46, 62, 80],
          areaColor: 'rgba(240,65,66,0.12)',
          lineStyle: { color: '#f04142', width: 1.5 },
          symbol: { width: 3, color: '#f04142', border: { width: 1.5, color: '#fff' } },
        },
        {
          values: [60, 82, 45, 72, 55, 90],
          areaColor: 'rgba(0,122,255,0.12)',
          lineStyle: { color: '#007AFF', width: 1.5 },
          symbol: { width: 3, color: '#007AFF', border: { width: 1.5, color: '#fff' } },
        },
      ],
    },
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <RadarChart option={args.option} />
      <OptionToggle value={args.option} />
    </div>
  ),
};

export const Option: Story = {
  render: () => <OptionTable meta={radarOptionMeta} />,
};
