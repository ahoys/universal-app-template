/**
 * index.dev.js
 *
 * Root of development environment.
 * Production environment will skip this file.
 *
 * Do not webpack this file.
 */
const config = require('./configs/index.js');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const httpProxy = require('http-proxy');
const clientConfig = require('../webpack/client.development');
const serverConfig = require('../webpack/server.development');
const compiler = webpack([clientConfig, serverConfig]);
const cors = require('cors');

// Create the Express server.
const app = express();

// Configure CORS.
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || config.cors.origin.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`${origin} - not allowed by CORS.`));
      }
    },
    optionsSuccessStatus: config.cors.optionsSuccessStatus,
    methods: config.cors.methods,
  })
);

// Configure proxies.
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
app.get(`${config.rest.target}*`, (req, res) => {
  apiProxy.web(req, res, {
    target: {
      port: config.rest.port,
      host: config.rest.host,
    },
  });
});

// Bind the development middlewares.
app.use(
  webpackDevMiddleware(compiler, {
    serverSideRender: true,
  })
);
app.use(webpackHotServerMiddleware(compiler));

app.listen(config.server.port, () => {
  console.log(`Development server is listening on port ${config.server.port}.`);
  console.log('Building files...');
});
