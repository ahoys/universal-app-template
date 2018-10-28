const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Production config (default).
// This will be automatically enabled. You can override settings in the dev-config below.
const config = {
  mode: 'production',
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
    },
    extensions: ['.js'],
    modules: ['node_modules'],
    plugins: [
      new CleanWebpackPlugin(['dist']),
    ],
  },
};

// Development overrides.
// Use cross-env NODE_ENV = development to initialize.
if (process.env.NODE_ENV === 'development') {
  config.mode = 'development';
  config.output.path = path.resolve(__dirname, 'dist/dev');
  config.devtool = 'inline-source-map';
  config.resolve.plugins = [
    new CleanWebpackPlugin(['dist/dev']),
  ];
}

module.exports = config;
