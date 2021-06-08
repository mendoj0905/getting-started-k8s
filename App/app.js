// Simple node.js web app for demonstrating containerizing apps
// For quick demo purposes only (not properly maintained)
'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('home.pug', {
  });
});

app.get('/test', (req, res) => {
  res.json({
    message: 'success'
  });
});

app.get('/new', (req, res) => {
  res.json({
    message: 'new endpoint'
  });
});

app.listen(6000);
module.exports.getApp = app;