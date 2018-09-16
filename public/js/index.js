var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Bar',
    text: 'Hey, Whats going on?'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected fron server');
});

socket.on('newMessage', function (message) {
  console.log('NewMessage', message);
});
