import { combineReducers } from 'redux';

import player from './player';
import nav from './nav';
import app from './app';
import game from './game';

export default combineReducers({
  player,
  nav,
  app,
  game,
});