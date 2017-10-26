const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/RigMarket";

app.get('/category', (req, res) => {
    findOne("Category", {id: 'gibson'}, function(err, data) {
        console.log('data', data);
    })
    // res.writeHead(200, {
    //     "Content-Type": "application/json"
    // })
    // res.end(JSON.stringify(result))
})

const findOne = (collection, condition) => {
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection(collection).find(condition, function(err, result) {
      if (err) throw err;
      db.close();
  });
  });
}

app.get('/', (req, res) => {
    console.log('Request: ');
    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    res.end(JSON.stringify(
      [{
        id: 'prs',
        text: 'Paul Reed Smith',
        status: true
      },
      {
        id: 'gibson',
        text: 'Gibson',
        status: false
      }]
    ))
})

const server = app.listen(3001, function() {
    const host = server.address().address
    const port = server.address().port
    console.log('Server is running on ', host + ': '+port);
})
