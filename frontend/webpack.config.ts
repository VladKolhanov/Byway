import path from 'path';
import webpack from 'webpack';

import { buildDevServer } from './config/webpack/build-dev-server';
import { buildMinimizer } from './config/webpack/build-minimizer';
import { buildPlugins } from './config/webpack/build-plugins';
import { buildResolve } from './config/webpack/build-resolve';
import { buildRules } from './config/webpack/build-rules';
import {
  WebpackBuildOptions,
  WebpackMode,
  WebpackPaths,
} from './config/webpack/types';

export const paths: WebpackPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  public: path.resolve(__dirname, 'public'),
};

const mode = (process.env.NODE_ENV || 'development') as WebpackMode;
const isServe = !!process.env.SERVE;
const isAnalyzer = !!process.env.ANALYZER || false;

const isDev = mode === 'development';
const isProd = mode === 'production';
const target = isDev ? 'web' : 'browserslist';

const buildOptions: WebpackBuildOptions = {
  isAnalyzer,
  isProd,
  isServe,
  isDev,
  paths,
};

export default (): webpack.Configuration => {
  return {
    mode,
    target,
    devServer: buildDevServer(buildOptions),
    entry: paths.entry,
    output: {
      filename: '[name].bundle.js',
      path: paths.dist,
      publicPath: '/',
      chunkFilename: '[name].[contenthash:8].chunk.js',
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
      minimizer: buildMinimizer(buildOptions),
    },
    performance: {
      hints: false,
      maxAssetSize: 512000,
      maxEntrypointSize: 512000,
    },
  };
};
