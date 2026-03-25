import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(tsx|ts)', '../src/**/*.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  docs: { autodocs: false },
};

export default config;
