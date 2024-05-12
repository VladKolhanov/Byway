import webpack from 'webpack'

export const assetLoader = (isDev: boolean): webpack.RuleSetRule => ({
  test: /\.(png|jpe?g|gif|webp|ico)$/i,
  type: isDev ? 'asset/resource' : 'asset',
})
