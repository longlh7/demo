const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let counter = 0

// app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/increase', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    res.end(JSON.stringify({
        num: ++counter
    }))
})

app.get('/decrease', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    res.end(JSON.stringify({
        num: --counter
    }))
})

app.get('/', (req, res) => {
  res.writeHead(200, {
      "Content-Type": "application/json"
  })
  res.end(JSON.stringify({
      num: counter
  }))
})

const server = app.listen(3000, function() {
    const host = server.address().address
    const port = server.address().port
    console.log('Server is running on ', host + ': '+port);
})
