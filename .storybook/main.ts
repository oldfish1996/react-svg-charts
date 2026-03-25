import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(tsx|ts)', '../src/**/*.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  docs: { autodocs: false },
  viteFinal: async (config) => {
    const basePath = process.env.STORYBOOK_BASE_PATH;
    return {
      ...config,
      base: basePath || config.base,
    };
  },
};

export default config;
