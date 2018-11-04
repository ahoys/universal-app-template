/**
 * index.dev.js
 * 
 * Root of development environment.
 * 
 * Package.json should call this file directly "node src/index.dev". Do not
 * webpack this file.
 * 
 * Production environment will skip this file.
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const compiler = webpack(require('../webpack.development.js'));

const app = express();

app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true,
}));

app.use(webpackHotServerMiddleware(compiler));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Development server is listening on port ${port}.`);
  console.log('Building files...');
});
