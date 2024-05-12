import { RuleSetRule } from 'webpack'

import { WebpackBuildOptions } from './types'
import {
  babelLoader,
  fontsLoader,
  cssLoader,
  assetLoader,
  svgLoader,
} from './loaders'

export const buildRules = ({ isDev }: WebpackBuildOptions): RuleSetRule[] => {
  return [
    cssLoader(isDev),
    assetLoader(isDev),
    svgLoader(),
    fontsLoader(),
    babelLoader(),
  ]
}
