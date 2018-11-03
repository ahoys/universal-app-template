/**
 * Development index file.
 * 
 * The goal is to set up a hot module loading development server.
 * To investigate build configuration for the development environment,
 * see: ../webpack.development.js.
 * 
 * Production mode will skip this file entirely.
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('../webpack.development.js');
const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true,
}));

app.use(webpackHotServerMiddleware(compiler));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
