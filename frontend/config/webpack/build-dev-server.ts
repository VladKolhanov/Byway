import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { WebpackBuildOptions } from './types';

export const buildDevServer = ({
  paths,
}: WebpackBuildOptions): DevServerConfiguration => ({
  port: 2000,
  historyApiFallback: true,
  hot: true,
  open: true,
  client: {
    logging: 'error',
  },
  compress: true,
  static: {
    directory: paths.dist,
  },
});
