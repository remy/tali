const http = require('http');
const middleware = require('webpack-dev-middleware');
const port = process.env.PORT || 3000;

// Do this as the first thing so that any code reading it knows the right env.
if (!process.env.BABEL_ENV) process.env.BABEL_ENV = 'development';
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const webpack = require('webpack');
const path = require('path');
const cwd = process.cwd();
const entry = process.argv[2] || require(cwd + '/package.json').main;

const config = require('./webpack.config')(`./${path.relative(cwd, entry)}`);

const compiler = webpack(config);
http
  .createServer((req, res) => {
    middleware(compiler, {
      lazy: true,
      publicPath: '/',
      logLevel: 'warn',
    })(req, res, (...args) => {
      res.setHeader('status', 404);
      res.end('404');
    });
  })
  .listen(port);

console.log(`Waiting on http://localhost:${port}/${entry}`);
