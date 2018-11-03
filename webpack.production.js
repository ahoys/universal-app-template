/**
 * webpack.production.js
 * 
 * Build config for a production environment.
 * See ./webpack.common.js to see the rest.
 * 
 * For production the goal should be to minify bundles,
 * lighten source maps and optimize assets. Build times
 * are nearly trivial.
 */
const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

// The built files will go here.
const destination = path.resolve(__dirname, 'dist');

module.exports = merge.multiple(common, {
  server: {
    mode: 'production',
    output: {
      path: destination,
      filename: 'server.js',
    },
    devtool: 'nosources-source-map',
    plugins: [
      // Cleans the destination folder before building new.
      new CleanWebpackPlugin([destination]),
    ],
  },
  client: {
    mode: 'production',
    output: {
      path: destination,
      filename: 'client.js',
    },
    devtool: 'nosources-source-map',
  },
});
