const server = require('http').createServer();
const game = require('./game');

const io = require('socket.io')(server, {
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

const MONITOR_ROOM = 'monitor';
const PLAYERS_ROOM = 'players';
const PLAYER_ROOM = 'player';

server.listen(8080);

io.on('connection', (client) => {
  client.on('join-monitor', () => {
    client.join(MONITOR_ROOM);
  });

  client.on('login', ({ name }) => {
    const player = game.addPlayer(name);
    client.player = player;
    client.emit('player-saved', player);
    client.join(PLAYERS_ROOM);
    client.join(`${PLAYER_ROOM}-${player.id}`);
    client.in(MONITOR_ROOM).emit('player-joined', player);
    console.log(`Player added: ${player.name}`);
  });

  client.on('game-started', () => {
    client.in(PLAYERS_ROOM).emit('game-started');
  });

  client.on('game-end', () => {
    client.in(PLAYERS_ROOM).emit('game-end');
  });

  client.on('score-up', ({ player, score }) => {
    client.in(`${PLAYER_ROOM}-${player.id}`).emit('score-up', score);
  });

  client.on('rotate-left', () => {
    client.in(MONITOR_ROOM).emit('rotate-left', client.player);
  });
  client.on('rotate-right', () => {
    client.in(MONITOR_ROOM).emit('rotate-right', client.player);
  });
  client.on('move-left', () => {
    client.in(MONITOR_ROOM).emit('move-left', client.player);
  });
  client.on('move-right', () => {
    client.in(MONITOR_ROOM).emit('move-right', client.player);
  });
  client.on('fall-down', () => {
    client.in(MONITOR_ROOM).emit('fall-down', client.player);
  });

  client.on('disconnect', () => {
    if (client.player) {
      game.removePlayer(client.player.id);
      io.in(MONITOR_ROOM).emit('player-left', client.player);
      console.log(`Player remove: ${client.player.name}`);
    }
  });
});

module.exports = io;