var express = require('express');
var app = express();
let portApp = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1><h2>CI/CD Test</h2>');
});

var server = app.listen(portApp, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
