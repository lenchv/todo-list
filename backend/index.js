var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World 2!');
});

app.get('/api', function (req, res) {
    res.send('my endpoint');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
