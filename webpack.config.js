const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Production config for the server.
// You can override settings in the dev-config below.
const serverConfig = {
  mode: 'production',
  target: 'node',
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js'
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

// Production config for the client.
// Client will have a different target.
const clientConfig = {
  mode: 'production',
  target: 'node',
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.bundle.js'
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
    plugins: [],
  },
};

// Development overrides.
// Use cross-env NODE_ENV = development to initialize.
if (process.env.NODE_ENV === 'development') {
  serverConfig.mode = 'development';
  serverConfig.output.path = path.resolve(__dirname, 'dist/dev');
  serverConfig.devtool = 'inline-source-map';
  serverConfig.resolve.plugins = [
    new CleanWebpackPlugin(['dist/dev']),
  ];
}

module.exports = [serverConfig, clientConfig];
