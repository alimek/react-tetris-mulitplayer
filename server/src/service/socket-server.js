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
  GAME_OVER,
  PLAYER_DESTROYED_ROWS,
  PLAYER_STATUS,
  START_GAME,
} = require('../constatnts/socket');

io.on('connection', (client) => {
  client.on(LOGIN_AS_MONITOR, () => actions.loginAsMonitor(client));
  client.on(LOGIN_AS_PLAYER, name => actions.loginAsPlayer(client, name));
  client.on(DISCONNECT, () => actions.onDisconnect(client, io));
  client.on(PLAYER_BOARD_UPDATED, data => actions.onPlayerBoardUpdated(client, data));
  client.on(GAME_OVER, () => actions.onGameOver(client, io));
  client.on(PLAYER_DESTROYED_ROWS, amount => actions.onDestroyedRows(client, io, amount));
  client.on(PLAYER_STATUS, isReady => actions.onPlayerReady(client, io, isReady));
  client.on(START_GAME, () => actions.startGame(client, io));
  // client.on('score-up', ({ player, score }) => {
  //   client.in(`${PLAYER_ROOM}-${player.id}`).emit('score-up', score);
  // });
});

module.exports = io;