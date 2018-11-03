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
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// The built files will go here.
const destination = path.resolve(__dirname, 'src/build');

module.exports = merge.multiple(common, {
  server: {
    mode: 'development',
    output: {
      path: destination,
      filename: 'dev.server.js',
      publicPath: '/',
    },
    devtool: 'eval-source-map',
  },
  client: {
    mode: 'development',
    output: {
      path: destination,
      filename: 'dev.client.js',
    },
    devtool: 'eval-source-map',
  },
});
