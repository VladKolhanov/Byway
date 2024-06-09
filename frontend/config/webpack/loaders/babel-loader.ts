import webpack from 'webpack';

export const babelLoader = (): webpack.RuleSetRule => ({
  test: /\.[jt]sx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    },
  },
});
