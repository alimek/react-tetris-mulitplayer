import { combineReducers } from 'redux';

import player from './player';
import app from './app';

export default combineReducers({
  player,
  app,
});