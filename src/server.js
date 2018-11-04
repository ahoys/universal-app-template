import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import serialize from 'serialize-javascript';
import App from 'components/App';
import createStore from 'reducers';
import { initializeSession } from 'actions/actions.session';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

export default () => (req, res, next) => {
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
      return res.status(500).end(`Try again later.`);
    }
    if (context.status === 404) {
      res.status(404).end('Not found.');
    }
    if (context.url) {
      return res.redirect(301, req.url);
    }
    return res.end(
      indexData
        .replace('<div id="root"></div>', `<div id="root">${client}</div>`)
        .replace(
          '</body>',
          `<script>window.REDUX_DATA = ${serialize(store.getState())}</script></body>`,
        )
        .replace('</body>', '<script src="./client.js"></script>')
      );
  });
};
