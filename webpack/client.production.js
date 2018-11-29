/**
 * client.production.js
 * Client build config for a production environment.
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');

// Root paths.
const root = path.resolve(__dirname, '../');
const dist = path.resolve(__dirname, '../dist');
const src = path.resolve(__dirname, '../src');

module.exports = {
  mode: 'production',
  name: 'client',
  target: 'web',
  devtool: 'nosources-source-map',
  entry: `${src}/client.js`,
  output: {
    path: dist,
    // Hash so that we can safely cache.
    filename: 'client.[chunkhash].js',
    chunkFilename: '[name].[chunkhash].client.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['isomorphic-style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      actions: `${src}/actions`,
      components: `${src}/components`,
      configs: `${src}/configs`,
      cycles: `${src}/cycles`,
      dist,
      reducers: `${src}/reducers`,
      styles: `${src}/styles`,
    },
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
  },
  plugins: [
    // Cleans the destination folder before building new.
    new CleanWebpackPlugin([dist], { root }),
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
