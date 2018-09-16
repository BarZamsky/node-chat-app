const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user');

  socket.emit('newEmail', {
    from: 'bar@gmail.com',
    text: 'Hey, how are you?',
    createAt: 123
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.emit('newMessage', {
    from: 'shahar',
    text: 'I dont know',
    createAt: 123123
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});



server.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});
