#!/usr/bin/env node
if (require('fs').existsSync(__dirname + '/lib')) {
  require('./lib');
} else {
  require('./dist');
}
