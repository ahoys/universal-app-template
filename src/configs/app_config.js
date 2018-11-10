/**
 * Application config.
 * 
 * This file should be called server-side only!
 */
const fs = require('fs');

// Load developer configs.
// This config file is developer specific and is not
// provided with the project.
// You can create your own dev_config.js to override specific settings.
let dc;
if (fs.existsSync('./dev_config.js')) {
  dc = require('./dev_config.js');
  console.log('Developer configs loaded.');
}

// Server specific configs.
const server = {
  port: dc && dc.server && dc.server.port
    ? dc.server.port
    : process.env.PORT || 3000,
}

// Development proxy specific configs.
const rest = {
  port: dc && dc.rest && dc.rest.port
    ? dc.rest.port
    : process.env.REST_PORT || 3000,
  host: dc && dc.rest && dc.rest.host
    ? dc.rest.host
    : process.env.REST_HOST || 'http://localhost/',
}

module.exports = {
  server,
  rest,
};
