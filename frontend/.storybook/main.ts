import { RuleSetRule } from 'webpack'
import path from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import { svgLoader } from '../config/webpack/loaders'

const isRuleSetRule = (rule: any): rule is RuleSetRule => {
  return rule && typeof rule === 'object' && 'test' in rule
}

const paths = {
  src: path.resolve(__dirname, '..', 'src'),
  public: path.resolve(__dirname, '..', 'public'),
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  swc: {
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules = config.module.rules.map((rule) => {
        const isSvgLoader =
          isRuleSetRule(rule) &&
          rule.test instanceof RegExp &&
          rule.test.test('.svg')

        return isSvgLoader ? { ...rule, exclude: /\.svg$/i } : rule
      })

      config.module.rules.push(svgLoader())
    }

    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': paths.src,
        '@public': paths.public,
      }
    }

    return config
  },
}

export default config
