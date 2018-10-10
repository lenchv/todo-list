let express = require('express');

let app = express();

app.get('/', function (req, res) {
  res.send('Hello World 2!');
});

app.get('/api', function (req, res) {
  setTimeout(() => {
    res.send('ok');
  }, Math.random() * 5000);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
