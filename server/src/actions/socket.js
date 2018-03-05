const debug = require('debug')('tetris');
const {
  MONITOR_ROOM,
  GAME_STATUS_UPDATED,
  PLAYER_SAVED,
  PLAYER_JOINED,
  PLAYER_BOARD_UPDATED,
  ALL_PLAYERS_ROOM,
  OTHER_PLAYER_DESTROYED_ROWS,
  PLAYER_STATUS,
} = require('../constatnts/socket');
const game = require('./game');
const Player = require('../models/player');
const { getPlayerRoom } = require('../utils/player');

const emitGameStatus = (io) => {
  io.in(ALL_PLAYERS_ROOM).emit(GAME_STATUS_UPDATED, game.getStatus());
  io.in(MONITOR_ROOM).emit(GAME_STATUS_UPDATED, game.getStatus());
};

module.exports.loginAsMonitor = (client) => {
  client.join(MONITOR_ROOM);
  emitGameStatus(client);
  client.monitor = true;
  debug('New monitor connection');
};

module.exports.loginAsPlayer = (client, name) => {
  const player = new Player(game.getPlayersNumber() + 1, name);

  game.addPlayer(player);
  client.join(getPlayerRoom(player.id));
  client.join(ALL_PLAYERS_ROOM);
  client.player = player;

  client.emit(PLAYER_SAVED, player);
  client.in(MONITOR_ROOM).emit(PLAYER_JOINED, player);
};

module.exports.onDisconnect = (client, io) => {
  if (client.player) {
    game.removePlayer(client.player);
    io.in(MONITOR_ROOM).emit('player-left', client.player);
  }

  if (client.monitor) {
    debug('Monitor disconnected');
  }
};

module.exports.onPlayerBoardUpdated = (client, data) => {
  client.in(MONITOR_ROOM).emit(PLAYER_BOARD_UPDATED, {
    playerId: client.player.id,
    ...data,
  });
};

module.exports.onGameStarted = (client, io) => {
  game.start();
  emitGameStatus(io);
};

module.exports.onGameEnd = (client, io) => {
  game.stop();
  emitGameStatus(io);
};

module.exports.onGameOver = (client, io) => {
  game.over();
  emitGameStatus(io);
};

module.exports.onDestroyedRows = (client, io, amount) => {
  client.broadcast.to(ALL_PLAYERS_ROOM).emit(OTHER_PLAYER_DESTROYED_ROWS, amount);
};

module.exports.onPlayerReady = (client, io, isReady) => {
  client.player.isReady = isReady;
  debug(`Player changed status. ${client.player.name} - ${isReady}`);
  const oldStatus = game.getStatus();
  io.in(MONITOR_ROOM).emit(PLAYER_STATUS, client.player);
  if (game.checkPlayersReady()) {
    debug('Game is ready to start');
    game.setReady();
  } else {
    game.setWaiting();
  }
  if (oldStatus !== game.getStatus()) {
    debug('Sent game status changed');
    emitGameStatus(io);
  }
};

module.exports.startGame = (client, io) => {
  game.start();
  emitGameStatus(io);
  debug('Game started');
};