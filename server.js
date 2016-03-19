var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var port = 3005;

var compiler = webpack(config);
app.use(webpackDevMiddleWare(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/mock.json');
});

app.use((req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
});
