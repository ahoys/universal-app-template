/**
 * server.js
 * 
 * Here we clue things together.
 * Client (including the React app) is embedded into
 * a basic html frame (index.html) and served to
 * the clients.
 * 
 * Both development and production environments
 * utilize this file.
 */
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

// Create initial context
// and initialize stores.
const context = {};
const store = createStore();
store.dispatch(initializeSession(true));
const indexFile = path.resolve('src/index.html');

// Handle rendered pages to clients.
export default () => (req, res, next) => {
  const client = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  fs.readFile(indexFile, 'utf8', (err, indexData) => {
    // 500: Error.
    if (err) {
      console.error('Could not read the index file:', err);
      return res.status(500).end('Could not provide the content. Try again later.');
    }
    // 404: Not found.
    if (context.status === 404) {
      res.status(404).end('Site not found.');
    }
    // 301: Redirect.
    if (context.url) {
      return res.redirect(301, req.url);
    }
    // 200: Success.
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
