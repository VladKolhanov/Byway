import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import webpack from 'webpack'

import { WebpackBuildOptions } from './types'

export const buildMimimizer = ({ isProd }: WebpackBuildOptions) => {
  const minimizer: webpack.WebpackPluginInstance[] = []

  if (isProd) {
    minimizer.push(new CssMinimizerPlugin())
  }

  return minimizer
}
