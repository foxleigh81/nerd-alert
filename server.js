var express = require('express');
var app = express();

app.get('/', function (req, res) {
  'use strict'
  res.send('Hello World!');
});

app.listen(3000, function () {
  'use strict'
  console.log('Example app listening on port 3000!');
});
