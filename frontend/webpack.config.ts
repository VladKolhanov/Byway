//TODO: Terser-webpack plugin
//TODO: Fork ts webpack plugin
//TODO: Analyser
//TODO: move performance in another function
//TODO: install husky

import webpack from 'webpack'
import path from 'path'

import { WebpackBuildOptions, WebpackPaths } from './config/webpack/types'
import { buildDevServer } from './config/webpack/build-dev-server'
import { buildPlugins } from './config/webpack/build-plugins'
import { buildRules } from './config/webpack/build-rules'
import { buildResolve } from './config/webpack/build-resolve'
import { buildMimimizer } from './config/webpack/build-mimimizer'

export const paths: WebpackPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  public: path.resolve(__dirname, 'public'),
}

const mode = process.env.NODE_ENV || 'development'
const isServe = !!process.env.SERVE

const isDev = mode === 'development'
const isProd = mode === 'production'
const target = isDev ? 'web' : 'browserslist'

const buildOptions: WebpackBuildOptions = {
  isProd,
  isServe,
  isDev,
  paths,
}

export default {
  mode,
  target,
  devServer: buildDevServer(),
  entry: paths.entry,
  output: {
    filename: '[name].[contenthash:6].js',
    path: paths.dist,
    assetModuleFilename: 'assets/[name][ext][query]',
    clean: true,
  },
  devtool: 'source-map',
  module: {
    strictExportPresence: true,
    rules: buildRules(buildOptions),
  },
  plugins: buildPlugins(buildOptions),
  resolve: buildResolve(buildOptions),
  optimization: {
    minimize: true,
    minimizer: buildMimimizer(buildOptions),
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
} as webpack.Configuration
