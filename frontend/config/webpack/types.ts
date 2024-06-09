export type WebpackMode = 'development' | 'production';

export interface WebpackPaths {
  entry: string;
  dist: string;
  html: string;
  src: string;
  public: string;
}

export interface WebpackBuildOptions {
  isDev: boolean;
  isProd: boolean;
  isServe: boolean;
  isAnalyzer: boolean;
  paths: WebpackPaths;
}
