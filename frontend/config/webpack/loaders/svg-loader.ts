import { RuleSetRule } from 'webpack'

export const svgLoader = (): RuleSetRule => ({
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        icon: true,
      },
    },
  ],
})
