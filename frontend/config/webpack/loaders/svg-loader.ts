import { RuleSetRule } from 'webpack';

export const svgLoader = (): RuleSetRule[] => {
  return [
    {
      test: /\.svg$/i,
      type: 'asset/resource',
      resourceQuery: /url/,
    },
    {
      test: /\.svg$/i,
      resourceQuery: { not: [/url/] },
      use: {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    },
  ];
};
