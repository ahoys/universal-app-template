const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  target: 'node',
  entry: {
    client: './src/client.js',
    server: './src/server.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, use: 'file-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      dist: path.resolve(__dirname, 'dist/'),
      components: path.resolve(__dirname, 'src/components/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      actions: path.resolve(__dirname, 'src/actions/'),
      containers: path.resolve(__dirname, 'src/containers/'),
    },
    extensions: ['.js'],
    modules: ['node_modules'],
    plugins: [
      // Cleans dist before building new.
      new CleanWebpackPlugin(['dist']),
    ],
  },
  devtool: 'inline-source-map',
};
