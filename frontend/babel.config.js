const plugins = [];

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins,
};
