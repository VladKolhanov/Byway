import { RuleSetRule } from 'webpack';

import {
  assetLoader,
  babelLoader,
  cssLoader,
  fontsLoader,
  mdxLoader,
  svgLoader,
} from './loaders';
import { WebpackBuildOptions } from './types';

export const buildRules = ({ isDev }: WebpackBuildOptions): RuleSetRule[] => {
  return [
    babelLoader(),
    mdxLoader(),
    ...cssLoader(isDev),
    assetLoader(isDev),
    ...svgLoader(),
    fontsLoader(),
  ];
};
