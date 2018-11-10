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
const config = require('./configs/app_config.js');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const httpProxy = require('http-proxy');
const compiler = webpack(require('../webpack.development.js'));
const cors = require('cors');

// Enable development environment for the client.
// For example debug logging is enabled by this.
process.env.DEV = 'true';

// Create the Express server.
const app = express();
app.use(cors());
app.options('*', cors());
const apiProxy = httpProxy.createProxyServer();

// Proxy error handling.
apiProxy.on('error', (err, req, res) => {
  console.log('PROXY ERROR');
  console.log(err);
  res.writeHead(500, {
    'Content-Type': 'text/plain',
  });
  res.end('Something went wrong');
});

// Proxy /api/ calls to localhost to avoid
// CORS issues.
app.get('/api*', (req, res) => {
  apiProxy.web(req, res, {
    target: {
      port: config.rest.port,
      host: config.rest.host,
    },
  });
});

// Bind the development middlewares.
app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true,
}));
app.use(webpackHotServerMiddleware(compiler));

app.listen(config.server.port, () => {
  console.log(`Development server is listening on port ${config.server.port}.`);
  console.log('Building files...');
});
