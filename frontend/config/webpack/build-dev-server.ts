import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export const buildDevServer = (): DevServerConfiguration => ({
  port: 2000,
  historyApiFallback: true,
  hot: true,
  open: true,
  client: {
    logging: 'none',
  },
})
