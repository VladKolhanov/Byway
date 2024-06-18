import type { Config } from 'jest';


const config: Config = {
  rootDir: __dirname,
  bail: 3,
  clearMocks: true,
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'cjs',
    'node',
    'js',
    'jsx',
    'json',
    'mjs',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-node',
  transform: {
    '.(ts|tsx)$': 'ts-jest',
  },
  globalSetup: '<rootDir>/jest/globalSetup.ts',
  globalTeardown: '<rootDir>/jest/globalTeardown.ts',
  setupFilesAfterEnv: ['<rootDir>/jest/setupFile.ts'],
}

export default config