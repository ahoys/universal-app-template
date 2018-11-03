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
    target: 'node',
    entry: './src/server.js',
    module: {
      rules: [
        { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.html$/, use: 'file-loader', exclude: /node_modules/ },
      ],
    },
    resolve: {
      alias: {
        actions: path.resolve(__dirname, 'src/actions/'),
        components: path.resolve(__dirname, 'src/components/'),
        reducers: path.resolve(__dirname, 'src/reducers/'),
      },
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
    },
  },
  client: {
    target: 'web',
    entry: './src/client.js',
    module: {
      rules: [
        { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.html$/, use: 'file-loader', exclude: /node_modules/ },
      ],
    },
    resolve: {
      alias: {
        actions: path.resolve(__dirname, 'src/actions/'),
        components: path.resolve(__dirname, 'src/components/'),
        reducers: path.resolve(__dirname, 'src/reducers/'),
      },
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
    },
  },
};
