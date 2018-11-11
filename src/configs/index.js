const fs = require('fs');
const dc = require('./default_config.json');

// Load custom configs only if available.
let cc;
if (fs.existsSync('./custom_config.json')) {
  cc = require('./custom_config.json');
  console.log('Custom configs found.');
}

const configs = {};

// Initialize the base config.
// It is important that the base config won't be altered and that it
// includes all the essential settings.
Object.keys(dc).forEach((setKey) => {
  configs[setKey] = dc[setKey];
});

// Read custom configs in.
// Prioritize custom launch parameters.
if (cc) {
  Object.keys(configs).forEach((setKey) => {
    Object.keys(configs[setKey]).forEach((key) => {
      if (cc[setKey] && cc[setKey][key] !== undefined) {
        // Read from custom_config.js.
        configs[setKey][key] = cc[setKey][key];
      }
    });
  });
}

// Finally, read launch parameters. These override everything else.
Object.keys(configs).forEach((setKey) => {
  Object.keys(configs[setKey]).forEach((key) => {
    const parameter = (`${setKey}_${key}`).toUpperCase();
    if (process.env[parameter]) {
      // Read launch parameter.
      // Syntax, e.g. SERVER_PORT=3000.
      configs[setKey][key] = process.env[parameter];
    }
  });
});

module.exports = configs;
