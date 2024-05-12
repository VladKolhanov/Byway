import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCSSExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { WebpackBuildOptions } from './types'

export const buildPlugins = ({
  isDev,
  isProd,
  isServe,
  paths,
}: WebpackBuildOptions) => {
  const commonPlugins: webpack.WebpackPluginInstance[] = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
  ]

  if (isServe) {
    commonPlugins.push(new ReactRefreshPlugin())
  }

  if (isDev) {
  }

  if (isProd) {
    commonPlugins.push(new webpack.ProgressPlugin())
    commonPlugins.push(
      new MiniCSSExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:6].css',
      }),
    )
  }

  return commonPlugins
}
