const debug = require('debug')('tetris');
const _ = require('lodash');

const game = require('../models/game');
const {
  GAME_STATUS_IN_PROGRESS,
  GAME_STATUS_OVER,
  GAME_STATUS_PAUSED,
  GAME_STATUS_WAITING,
  GAME_STATUS_READY,
} = require('../constatnts/game');


module.exports.getPlayersNumber = () => game.players.length;
module.exports.start = () => {
  game.status = GAME_STATUS_IN_PROGRESS;
  debug('Game started');
};

module.exports.pause = () => {
  game.status = GAME_STATUS_PAUSED;
  debug('Game paused');
};

module.exports.over = () => {
  game.status = GAME_STATUS_OVER;
  debug('Game over');
};

module.exports.stop = () => {
  module.exports.setWaiting();
  game.players.forEach(player => player.score = 0);
  debug('Game restarted');
};

module.exports.addPlayer = (player) => {
  game.players.push(player);
  debug(`Player added. Players: ${game.players.length}`, player);
};

module.exports.removePlayer = (player) => {
  const { id } = player;
  _.remove(game.players, { id });
  debug(`Player removed. Players: ${game.players.length}`, player);

  if (
    (
      game.status === GAME_STATUS_IN_PROGRESS ||
      game.status === GAME_STATUS_PAUSED
    ) && game.players.length === 0
  ) {
    module.exports.stop();
  }
};

module.exports.checkPlayersReady = () => {
  let ready = 0;

  game.players.forEach((player) => {
    if (player.isReady) {
     ready += 1;
    }
  });

  return ready === game.players.length;
};

module.exports.getStatus = () => game.status;

module.exports.setReady = () => {
  game.status = GAME_STATUS_READY;
};

module.exports.setWaiting = () => {
  game.status = GAME_STATUS_WAITING;
};
