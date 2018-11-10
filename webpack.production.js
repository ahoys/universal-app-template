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
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.common.js');

// The built files will go here.
const destination = path.resolve(__dirname, 'dist');

module.exports = merge.multiple(common, {
  server: {
    mode: 'production',
    entry: './src/index.prod.js',
    devtool: 'nosources-source-map',
    plugins: [
      // Cleans the destination folder before building new.
      new CleanWebpackPlugin([destination]),
      // This plugin extracts CSS into separate files.
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      // To avoid warnings in builds.
      new webpack.DefinePlugin({ "global.GENTLY": false }),
    ],
  },
  client: {
    mode: 'production',
    devtool: 'nosources-source-map',
  },
});
