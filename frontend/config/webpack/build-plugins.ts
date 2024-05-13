import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCSSExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { WebpackBuildOptions } from './types'

export const buildPlugins = ({
  isAnalyzer,
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
  if (isAnalyzer) {
    commonPlugins.push(new BundleAnalyzerPlugin())
  }

  if (isServe) {
    commonPlugins.push(new ReactRefreshPlugin())
  }

  if (isDev) {
    commonPlugins.push(new ForkTsCheckerWebpackPlugin())
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
