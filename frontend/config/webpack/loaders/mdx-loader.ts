import webpack from 'webpack';

export const mdxLoader = (): webpack.RuleSetRule => ({
  test: /\.mdx?$/,
  use: [
    {
      loader: '@mdx-js/loader',
      /** @type {import('@mdx-js/loader').Options} */
      options: {
			},
    },
  ],
});
