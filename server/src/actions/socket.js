const debug = require('debug')('tetris');
const {
  MONITOR_ROOM,
  GAME_STATUS_UPDATED,
  PLAYER_SAVED,
  PLAYER_JOINED,
  PLAYER_BOARD_UPDATED,
  ALL_PLAYERS_ROOM,
  OTHER_PLAYER_DESTROYED_ROWS,
} = require('../constatnts/socket');
const game = require('./game');
const Player = require('../models/player');
const { getPlayerRoom } = require('../utils/player');

module.exports.loginAsMonitor = (client) => {
  client.join(MONITOR_ROOM);
  client.in(MONITOR_ROOM).emit(GAME_STATUS_UPDATED, game.getStatus());
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
  io.in(ALL_PLAYERS_ROOM).emit(GAME_STATUS_UPDATED, game.getStatus());
};

module.exports.onGameEnd = (client, io) => {
  game.stop();
  io.in(ALL_PLAYERS_ROOM).emit(GAME_STATUS_UPDATED, game.getStatus());
};

module.exports.onGameOver = (client, io) => {
  game.over();
  io.in(ALL_PLAYERS_ROOM).emit(GAME_STATUS_UPDATED, game.getStatus());
};

module.exports.onDestroyedRows = (client, io, amount) => {
  client.broadcast.to(ALL_PLAYERS_ROOM).emit(OTHER_PLAYER_DESTROYED_ROWS, amount);
};
