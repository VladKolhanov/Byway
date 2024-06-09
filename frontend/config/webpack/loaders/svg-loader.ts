import { RuleSetRule } from 'webpack';

export const svgLoader = (): RuleSetRule => {
  return {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  };
};
