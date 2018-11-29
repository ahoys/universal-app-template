/**
 * serverRenderer.js
 * 
 * Here we clue things together.
 * Client (including the React app) is embedded into
 * a basic html frame and served to clients.
 * 
 * Both development and production environments
 * utilize this file.
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from 'components/App';
import createStore from 'reducers';
import flushChunks from 'webpack-flush-chunks'
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Map } from 'immutable';
import { clearChunks, flushChunkNames } from 'react-universal-component/server'

// Create initial context
// and initialize stores.
const store = createStore(new Map({}));

// A properly formatted basename should have a leading slash, but no trailing slash.
// https://reacttraining.com/react-router/core/api/StaticRouter/basename-string
const basename = process.env.BASENAME || '';

// Handle rendered pages to clients.
export default ({ clientStats }) => (req, res, next) => {
  const context = {};
  const client = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        basename={basename}
        location={req.url}
        context={context}
      >
        <App context={context} />
      </StaticRouter>
    </Provider>
  );
  // Code splitting.
  clearChunks();
  const { js } = flushChunks(clientStats, {
    chunkNames: flushChunkNames(),
  });
  // 404: Not found.
  if (context.status === 404) {
    res.status(404).end('Site not found.');
  }
  // 301: Redirect.
  if (context.url) {
    return res.redirect(301, req.url);
  }
  // 200: Success.
  res.end(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Universal App</title>
        <meta name="description" content="Universal App">
        <meta name="author" content="Ari Höysniemi">
        <style type="text/css">html,body{margin:0;padding:0;}</style>
      </head>
      <body>
        <div id="root">${client}</div>
        <script type='text/javascript'>window.REDUX_DATA = ${serialize(store.getState())}</script>
        ${js}
      </body>
    </html>
  `)
};
