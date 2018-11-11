/**
 * webpack.common.js
 * 
 * Here you'll find shared build config for
 * production and development.
 * 
 * Related files:
 * ./webpack.production.js
 * ./webpack.development.js
 */
const path = require('path');

module.exports = {
  server: {
    name: 'server',
    target: 'node',
    entry: './src/server.js',
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'server.js',
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
        actions: path.resolve(__dirname, 'src/actions/'),
        components: path.resolve(__dirname, 'src/components/'),
        configs: path.resolve(__dirname, 'src/configs/'),
        cycles: path.resolve(__dirname, 'src/cycles/'),
        reducers: path.resolve(__dirname, 'src/reducers/'),
        styles: path.resolve(__dirname, 'src/styles/'),
      },
      extensions: ['.js', '.jsx', '.json'],
      modules: ['node_modules'],
    },
  },
  client: {
    name: 'client',
    target: 'web',
    entry: './src/client.js',
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'client.js',
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
        dist: path.resolve(__dirname, 'dist/'),
        actions: path.resolve(__dirname, 'src/actions/'),
        components: path.resolve(__dirname, 'src/components/'),
        configs: path.resolve(__dirname, 'src/configs/'),
        cycles: path.resolve(__dirname, 'src/cycles/'),
        reducers: path.resolve(__dirname, 'src/reducers/'),
        styles: path.resolve(__dirname, 'src/styles/'),
      },
      extensions: ['.js', '.jsx', '.json'],
      modules: ['node_modules'],
    },
  },
};
