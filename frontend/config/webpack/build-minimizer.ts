import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'

import { WebpackBuildOptions } from './types'

export const buildMinimizer = ({ isProd }: WebpackBuildOptions) => {
  const minimizer: webpack.WebpackPluginInstance[] = []

  if (isProd) {
    minimizer.push(new CssMinimizerPlugin())
    minimizer.push(new TerserPlugin())
  }

  return minimizer
}
