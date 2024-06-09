import { ResolveOptions } from 'webpack';

import { WebpackBuildOptions } from './types';

export const buildResolve = ({
  paths,
}: WebpackBuildOptions): ResolveOptions => {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    preferAbsolute: true,
    modules: [paths.src, paths.public, 'node_modules'],
    alias: {
      '@': paths.src,
      '@public': paths.public,
    },
  };
};
