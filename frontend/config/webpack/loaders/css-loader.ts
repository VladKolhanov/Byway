import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'

export const cssLoader = (isDev: boolean): RuleSetRule[] => {
  return [
    {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.module\.css$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: isDev
                ? '[name]__[local]__[hash:base64:5]'
                : '[hash:base64]',
            },
            importLoaders: 1,
          },
        },
        'postcss-loader',
      ],
    },
  ]
}
