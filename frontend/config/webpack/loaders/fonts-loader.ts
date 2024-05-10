import webpack from 'webpack'

export const fontsLoader = (): webpack.RuleSetRule => ({
  test: /\.(woff2?|eot|ttf|otf)$/i,
  type: 'asset/resource',
})
