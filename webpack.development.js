/**
 * webpack.development.js
 * 
 * Build config for a development environment.
 * See ./webpack.common.js to see the rest.
 * 
 * For development the goal should be to give
 * as strong source mapping as feasible and
 * fast build times.
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// The built files will go here.
const destination = path.resolve(__dirname, 'src/build');

module.exports = merge.multiple(common, {
  server: {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
      publicPath: '/',
      libraryTarget: 'commonjs2',
    },
    plugins: [
      // To avoid warnings in builds.
      new webpack.DefinePlugin({ "global.GENTLY": false }),
    ],
  },
  client: {
    mode: 'development',
    devtool: 'eval-source-map',
  },
});
