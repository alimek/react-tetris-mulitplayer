import { combineReducers } from 'redux';

import app from './app';
import players from './players';

export default combineReducers({
  app,
  players,
});
