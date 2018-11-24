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
const StatsPlugin = require('stats-webpack-plugin');
const common = require('./webpack.common.js');

// The built files will go here.
const destination = path.resolve(__dirname, 'dist');

// In pre-bundle we initialize the upcoming build.
// 1. Clear old files.
// 2. Generate stats.json for dynamic code splitting purposes.
const isPreBundle = process.env.PRE_BUNDLE === 'true';

module.exports = merge.multiple(common, {
  server: {
    mode: 'production',
    entry: isPreBundle
      ? './src/server.js'
      : './src/index.prod.js',
    devtool: 'nosources-source-map',
    plugins: isPreBundle
      ? [
        // Cleans the destination folder before building new.
        new CleanWebpackPlugin([destination]),
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
      ]
      : [
        // To avoid warnings in builds.
        new webpack.DefinePlugin({ "global.GENTLY": false }),
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
      ],
  },
  client: {
    mode: 'production',
    devtool: 'nosources-source-map',
    plugins: isPreBundle
      ? [
        // Creates stats for code splitting.
        new StatsPlugin('stats.json'),
      ]
      : [],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
          },
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            priority: 10,
            enforce: true,
          }
        }
      }
    },
  },
});
