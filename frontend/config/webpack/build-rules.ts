import { RuleSetRule } from 'webpack';

import {
  assetLoader,
  babelLoader,
  cssLoader,
  fontsLoader,
  svgLoader,
} from './loaders';
import { WebpackBuildOptions } from './types';

export const buildRules = ({ isDev }: WebpackBuildOptions): RuleSetRule[] => {
  return [
    babelLoader(),
    ...cssLoader(isDev),
    assetLoader(isDev),
    svgLoader(),
    fontsLoader(),
  ];
};
