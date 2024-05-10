import { RuleSetRule } from 'webpack'

import { WebpackBuildOptions } from './types'
import { babelLoader, fontsLoader, cssLoader, assetLoader } from './loaders'

export const buildRules = ({ isDev }: WebpackBuildOptions): RuleSetRule[] => {
  return [cssLoader(isDev), assetLoader(isDev), fontsLoader(), babelLoader()]
}
