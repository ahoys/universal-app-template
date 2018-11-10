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
import debug from 'debug';
import express from 'express';
import ServerRenderer from './server';

debug.disable();
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('dist'));

app.use(ServerRenderer());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Production server is listening on port ${port}.`);
});
