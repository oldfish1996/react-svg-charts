export const chartTokens = {
  color: {
    text: {
      primary: '#000000',
      secondary: '#5e6570',
    },
    grid: {
      line: '#5e6570',
    },
    chart: {
      line: '#f04142',
      bar: '#ff403a',
      radar: '#007AFF',
      positive: '#f04142',
      negative: '#2da822',
      axisLine: '#5e6570',
    },
  },
  spacing: {
    chartPadding: {
      top: 12,
      right: 12,
      bottom: 4,
      left: 4,
    },
    axis: {
      xLabelMargin: 4,
      yLabelMargin: 8,
    },
    label: {
      gap: 2,
    },
    radar: {
      indicatorGap: 6,
    },
  },
  axis: {
    ySplitNum: 4,
  },
  size: {
    point: 4,
  },
  typography: {
    fontFamily: {
      sans: 'sans-serif',
    },
    fontSize: {
      axis: 10,
      tooltip: 12,
    },
    lineHeight: {
      axis: 1.4,
    },
  },
  shape: {
    radius: {
      bar: 2,
    },
  },
  stroke: {
    width: {
      line: 1.5,
      axisLine: 1,
      grid: 0.5,
      emphasis: 1,
    },
    dash: {
      grid: '4 2',
      emphasis: '2 2',
    },
  },
} as const;
