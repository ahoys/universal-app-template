/**
 * index.prod.js
 *
 * Root of production environment.
 * Development environment will skip this file.
 */
import config from 'configs';
import debug from 'debug';
import express from 'express';
import serverRenderer from './serverRenderer';
import httpProxy from 'http-proxy';
import cors from 'cors';
import clientStats from 'dist/stats.json';

debug.disable('*');

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
  res.writeHead(500, {
    'Content-Type': 'text/plain',
  });
  res.end('Something went wrong.');
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

app.use(express.static('dist'));

app.use(serverRenderer({ clientStats }));

app.listen(config.server.port, () => {
  console.log(`Production server is listening on port ${config.server.port}.`);
});
