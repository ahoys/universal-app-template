/**
 * index.js
 * 
 * Development server starts from here.
 * This is a wrapper file for the actual server file.
 * 
 * The goal is to enable es6 imports and
 * syntax in server.js.
 * 
 * Production build will skip this file.
 */
require('@babel/register');
require('@babel/polyfill');
require('app-module-path/register');
require('./server.js');
