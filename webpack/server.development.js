/**
 * server.development.js
 * Server build config for a development environment.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'server',
  mode: 'development',
  target: 'node',
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, '../src/server.js'),
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, use: 'file-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ['isomorphic-style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, '../src/actions/'),
      components: path.resolve(__dirname, '../src/components/'),
      configs: path.resolve(__dirname, '../src/configs/'),
      cycles: path.resolve(__dirname, '../src/cycles/'),
      reducers: path.resolve(__dirname, '../src/reducers/'),
      styles: path.resolve(__dirname, '../src/styles/'),
    },
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
  },
  plugins: [
    // To avoid warnings in builds.
    new webpack.DefinePlugin({ "global.GENTLY": false }),
    // Servers should not split.
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
