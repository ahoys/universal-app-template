/**
 * client.development.js
 * Client build config for a development environment.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'client',
  mode: 'development',
  target: 'web',
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, '../src/client.js'),
  output: {
    filename: 'client.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, '../src/actions/'),
      components: path.resolve(__dirname, '../src/components/'),
      configs: path.resolve(__dirname, '../src/configs/'),
      cycles: path.resolve(__dirname, '../src/cycles/'),
      reducers: path.resolve(__dirname, '../src/reducers/'),
    },
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, '../node_modules/')],
  },
  plugins: [
    // Servers should not split.
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
