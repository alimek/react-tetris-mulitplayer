import { CHANGE_NAME, PLAYER_SCORE_UP, SAVE_FROM_SOCKET, TOGGLE_PLAYER_READY } from '../constants/player';
import store from '../store';
import socket from '../utils/socket';
import { PLAYER_STATUS } from '../constants/socket';

export const changeName = name => ({ type: CHANGE_NAME, name });
export const save = data => ({ type: SAVE_FROM_SOCKET, ...data });
export const togglePlayerReady = () => (dispatch) => {
  dispatch({ type: TOGGLE_PLAYER_READY });
  const { player } = store.getState();
  socket.emit(PLAYER_STATUS, player.isReady);
};
export const scoreUp = score => ({ type: PLAYER_SCORE_UP, score });
