import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import serialize from 'serialize-javascript';
import App from 'components/App';
import createStore from 'reducers';
import { initializeSession } from 'actions/actions.session'
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const compiler = webpack(require('../webpack.development.js'));
  app.use(webpackDevMiddleware(compiler, {
    serverSideRender: true,
  }));
  app.use(webpackHotServerMiddleware(compiler));
  app.use(express.static('./build'));
} else {
  app.use(express.static('dist'));
}

app.get('/*', (req, res) => {
  const context = {};
  const store = createStore();
  store.dispatch(initializeSession(true));
  const client = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const indexFile = path.resolve('src/index.html');
  fs.readFile(indexFile, 'utf8', (err, indexData) => {
    if (err) {
      console.error('Error on reading indexFile:', err);
      return res.status(500).end(`Damn, it's broken. Try again later.`);
    }
    if (context.status === 404) {
      res.status(404);
    }
    if (context.url) {
      return res.redirect(301, req.url);
    }
    return res.end(
      indexData
        .replace('<div id="root"></div>', `<div id="root">${client}</div>`)
        .replace('</body>', `<script>window.REDUX_DATA = ${serialize(store.getState())}</script></body>`)
        .replace('</body>', '<script src="./client.js"></script>')
      );
  })
});

app.listen(3000, () => {
  console.log('Server on 3000.');
});
