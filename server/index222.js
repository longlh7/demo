const app = require('express')()
const server = require('http').Server(app);
var io = require('socket.io')(server);

let counter = 0

server.listen(3000, function() {
    console.log('Running on port 3000');
});

io.on('connection', function (socket) {
  socket.on('action', (action) => {
      switch (action.type) {
        case 'server/increase':
          console.log('increase');
          io.sockets.emit('action', {
            type: 'client/UPDATE',
            num: ++counter
          })
          break;
        case 'server/decrease':
          console.log('decrease');
          io.sockets.emit('action', {
            type: 'client/UPDATE',
            num: --counter
          })
          break;
        default:

      }
  });
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.writeHead(200, {
      "Content-Type": "application/json"
  })
  res.end(JSON.stringify({
      num: counter
  }))
})
