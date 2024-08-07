import type { Config } from 'jest';

const config: Config = {
  rootDir: __dirname,
  bail: 3,
  clearMocks: true,
  globals: {},
  moduleDirectories: ['node_modules', 'src', 'config', 'public'],
  modulePaths: ['<rootDir>/src', '<rootDir>/public'],
  moduleFileExtensions: ['tsx', 'ts', 'json', 'js', 'jsx'],
  moduleNameMapper: {
    '.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/__mocks__/file-mock.ts',
    '.svg\\?url$': '<rootDir>/config/jest/__mocks__/svg-url-mock.ts',
    '.css$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
  },
  transform: {
    '.(ts|tsx)$': 'ts-jest',
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],
  testEnvironment: 'jsdom',
};

export default config;
