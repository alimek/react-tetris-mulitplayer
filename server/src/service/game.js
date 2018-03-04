const _ = require('lodash');

const game = {
  players: [],

};

const addPlayer = (name) => {
  const newPlayer = {
    id: game.players.length + 1,
    name: name,
    score: 0,
  };

  game.players.push(newPlayer);

  return newPlayer;
};

const removePlayer = id => _.remove(game.players, { id });

module.exports = {
  game,
  addPlayer,
  removePlayer,
};