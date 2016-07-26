#!/usr/bin/env node

require('babel-core/register')({
  presets: ['es2015-node5', 'stage-0', 'react']
});


var app = require('./app')

app.listen(3000);
