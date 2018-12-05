/**
 * server.production.js
 * Server build config for a production environment.
 *
 * Should be run after client.production.js build!
 */
const path = require('path');
const webpack = require('webpack');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

// Root paths.
const dist = path.resolve(__dirname, '../dist');
const src = path.resolve(__dirname, '../src');

module.exports = {
  mode: 'production',
  name: 'server',
  target: 'node',
  devtool: 'nosources-source-map',
  entry: `${src}/index.prod.js`,
  output: {
    path: dist,
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      actions: `${src}/actions/`,
      components: `${src}/components/`,
      configs: `${src}/configs/`,
      cycles: `${src}/cycles/`,
      dist,
      reducers: `${src}/reducers/`,
    },
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
  },
  plugins: [
    // To avoid warnings in builds.
    new webpack.DefinePlugin({ 'global.GENTLY': false }),
    // Don't split server code.
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    // This will add git version information to dist.
    // Can be useful in determining build version.
    new GitRevisionPlugin(),
  ],
};
