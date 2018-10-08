let express = require('express');
let MongoClient = require('mongodb').MongoClient;

let app = express();

app.get('/', function (req, res) {
  res.send('Hello World 2!');
});

app.get('/api', function (req, res) {
  res.send('my endpoint');
});

app.get('/api/add', function (req, res) {
  MongoClient.connect("mongodb://root:root@mongodb:27017", function(err, client) {
    if(err) {
      res.send('Fail connection');
      return;
    }
    const db = client.db('myDb');
    const collection = db.collection('test');
    collection.insert({ "hello": req.query.name }, function (err) {
      if (err) {
        res.send('Failure insertion');
        return;
      }

      res.send('ok');
    });
  });
});

app.get('/api/get', function (req, res) {
 
  MongoClient.connect("mongodb://root:root@mongodb:27017", function(err, client) {
    if(err) {
      res.send('Fail connection');
      return;
    }
    const db = client.db('myDb');
    const collection = db.collection('test');
    collection.find().toArray((err, items) => {
      if (err) {
        res.send('Error retreiving data');
        return;
      }

      res.send(items);
    });
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
