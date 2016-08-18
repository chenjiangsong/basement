// import express from 'express'
const express = require('express')
const app = express()
const vue = require('./vue/shell.js')

app.set('view engine', 'jade');

// app.get('/', (req, res) => {
//     res.render('./index', { title: 'Hey', message: 'Hello there!'})
// })

app.use('/static', express.static('dist'))

app.use(vue);

app.listen(3000)
// module.exports = app

// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
//
// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//
//   console.log('Example app listening at http://%s:%s', host, port);
// });
