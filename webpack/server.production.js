/**
 * server.production.js
 * Server build config for a production environment.
 * 
 * Should be run after client.production.js build!
 */
const path = require('path');
const webpack = require('webpack');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

module.exports = {
  mode: 'production',
  name: 'server',
  target: 'node',
  devtool: 'nosources-source-map',
  entry: path.resolve(__dirname, '../src/index.prod.js'),
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'server.js',
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
      dist: path.resolve(__dirname, '../dist/'),
      reducers: path.resolve(__dirname, '../src/reducers/'),
      styles: path.resolve(__dirname, '../src/styles/'),
    },
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
  },
  plugins: [
    // To avoid warnings in builds.
    new webpack.DefinePlugin({ "global.GENTLY": false }),
    // Don't split server code.
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    // This will add git version information to dist.
    // Can be useful in determining build version.
    new GitRevisionPlugin(),
  ],
};
