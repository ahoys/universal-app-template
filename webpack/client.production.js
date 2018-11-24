/**
 * client.production.js
 * Client build config for a production environment.
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  mode: 'production',
  name: 'client',
  target: 'web',
  devtool: 'nosources-source-map',
  entry: path.resolve(__dirname, '../src/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist/'),
    // Hash so that we can safely cache.
    filename: 'client.[chunkhash].js',
    chunkFilename: '[name].[chunkhash].client.js',
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
    modules: [path.resolve(__dirname, '../node_modules/')],
  },
  plugins: [
    // Cleans the destination folder before building new.
    new CleanWebpackPlugin([path.resolve(__dirname, '../dist/')]),
    // Creates stats for code splitting.
    new StatsPlugin('stats.json'),
  ],
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
        },
      },
    },
  },
};
