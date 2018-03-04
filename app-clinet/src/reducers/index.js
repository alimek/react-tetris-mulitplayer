import { combineReducers } from 'redux';

import player from './player';
import game from './game';
import app from './app';

export default combineReducers({
  player,
  game,
  app,
});
