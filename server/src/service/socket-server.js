const server = require('http').createServer();

const io = require('socket.io')(server, {
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});
server.listen(8080);


const actions = require('../actions/socket');
const {
  LOGIN_AS_MONITOR,
  LOGIN_AS_PLAYER,
  DISCONNECT,
  PLAYER_BOARD_UPDATED,
  GAME_STARTED,
  GAME_END,
  GAME_OVER,
} = require('../constatnts/socket');

io.on('connection', (client) => {
  client.on(LOGIN_AS_MONITOR, () => actions.loginAsMonitor(client));
  client.on(LOGIN_AS_PLAYER, name => actions.loginAsPlayer(client, name));
  client.on(DISCONNECT, () => actions.onDisconnect(client, io));
  client.on(PLAYER_BOARD_UPDATED, data => actions.onPlayerBoardUpdated(client, data));
  client.on(GAME_STARTED, () => actions.onGameStarted(client, io));
  client.on(GAME_END, () => actions.onGameEnd(client, io));
  client.on(GAME_OVER, () => actions.onGameOver(client, io))
  // client.on('score-up', ({ player, score }) => {
  //   client.in(`${PLAYER_ROOM}-${player.id}`).emit('score-up', score);
  // });
});

module.exports = io;