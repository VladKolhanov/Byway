import { RuleSetRule } from 'webpack'
import path from 'path'

import type { StorybookConfig } from '@storybook/react-webpack5'
import { cssLoader, svgLoader } from 'config/webpack/loaders'

const isFindRule = (rule: any, test: string): rule is RuleSetRule => {
  const isRuleSetRule = rule && typeof rule === 'object' && 'test' in rule
  const isRegExp = rule.test instanceof RegExp

  return isRuleSetRule && isRegExp && rule.test.test(test)
}

const paths = {
  src: path.resolve(__dirname, '..', '..', 'src'),
  public: path.resolve(__dirname, '..', '..', 'public'),
}

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
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
        const isSvgLoader = isFindRule(rule, '.svg')
        const isCssLoader = isFindRule(rule, '.css')

        if (isSvgLoader) return { ...(rule as RuleSetRule), exclude: /\.svg$/i }
        if (isCssLoader) return { ...(rule as RuleSetRule), exclude: /\.css$/i }

        return rule
      })

      config.module.rules.push(svgLoader())
      config.module.rules.push(...cssLoader())
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
