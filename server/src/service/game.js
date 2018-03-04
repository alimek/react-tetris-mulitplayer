const _ = require('lodash');
const debug = require('debug')('tetris');

const game = {
  players: [],
  started: false,
};

const addPlayer = (name) => {
  if (_.indexOf(game.players, { name }) !== -1){
    return;
  }

  const newPlayer = {
    id: game.players.length + 1,
    name: name,
    score: 0,
  };

  game.players.push(newPlayer);
  debug(`Player added`, newPlayer);

  return newPlayer;
};

const removePlayer = id => _.remove(game.players, { id });
const startGame = () => game.started = true;
const stopGame = () => game.started = false;

module.exports = {
  game,
  addPlayer,
  removePlayer,
  startGame,
  stopGame,
};