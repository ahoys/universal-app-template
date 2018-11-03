const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('../webpack.config.js');
const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true,
}));

app.use(webpackHotServerMiddleware(compiler));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
