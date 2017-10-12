const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/category', (req, res) => {
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
