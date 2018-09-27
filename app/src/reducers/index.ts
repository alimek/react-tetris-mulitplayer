import { combineReducers } from 'redux';

import player from './player';
import nav from './nav';
import app from './app';

export default combineReducers({
  player,
  nav,
  app,
});