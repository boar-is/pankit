import type { StorybookConfig } from '@storybook/nextjs'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'

const storybookConfig: StorybookConfig = {
  stories: ['../app/**/stories.@(js|jsx|mjs|ts|tsx)', '../app/**/docs.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    if (!config.resolve) {
      return config
    }

    config.resolve.plugins = [
      ...(config.resolve.plugins ?? []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]
    return config
  },
}
export default storybookConfig
