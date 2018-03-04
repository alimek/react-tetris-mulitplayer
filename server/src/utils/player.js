const PLAYER_ROOM = require('../constatnts/socket').PLAYER_ROOM;

module.exports.getPlayerRoom = id => `${PLAYER_ROOM}-${id}`;
