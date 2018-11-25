/**
 * serverRenderer.js
 * 
 * Here we clue things together.
 * Client (including the React app) is embedded into
 * a basic html frame (index.html) and served to clients.
 * 
 * Both development and production environments
 * utilize this file.
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import serialize from 'serialize-javascript';
import ContextProvider from 'components/ContextProvider';
import createStore from 'reducers';
import flushChunks from 'webpack-flush-chunks'
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Map } from 'immutable';
import { clearChunks, flushChunkNames } from 'react-universal-component/server'

// Create initial context
// and initialize stores.
const store = createStore(new Map({}));
const indexFile = 'src/index.html';

// A properly formatted basename should have a leading slash, but no trailing slash.
// https://reacttraining.com/react-router/core/api/StaticRouter/basename-string
const basename = process.env.BASENAME || '';

// Handle rendered pages to clients.
export default ({ clientStats }) => (req, res, next) => {
  const css = new Set();
  const context = {
    insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())),
  };
  const client = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        basename={basename}
        location={req.url}
        context={context}
      >
        <ContextProvider context={context} />
      </StaticRouter>
    </Provider>
  );
  // Code splitting.
  clearChunks();
  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames(),
  });
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
          '<script name="store"></script>',
          `<script>window.REDUX_DATA = ${serialize(store.getState())}</script></body>`,
        )
        .replace(
          '<style name="styles"></style>',
          styles,
        )
        .replace(
          '<script name="cssHash"></script>',
          cssHash,
        )
        .replace(
          '<script name="js"></script>',
          js,
        )
        .replace(
          '<style type="text/css"></style>',
          `<style type="text/css">${[...css].join('')}</style>`
        ),
      );
  });
};
