/**
 * index.prod.js
 * 
 * Root of production environment.
 * 
 * You should never call this file directly, instead,
 * build the project with webpack.production configs to create a
 * proper /dist and then use "node dist/server"
 * to kick off the server.
 * 
 * Development environment will skip this file.
 */
import express from 'express';
import ServerRenderer from './server';

const app = express();

app.use(express.static('dist'));

app.use(ServerRenderer());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Production server is listening on port ${port}.`);
});
