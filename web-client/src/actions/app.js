import { GAME_END, GAME_OVER, GAME_START } from '../constants/app';
import socket from '../utils/socket';

export const startGame = () => (dispatch) => {
  dispatch({ type: GAME_START });
  socket.emit('game-started');
};
export const endGame = () => (dispatch) => {
  dispatch({ type: GAME_END });
  socket.emit('game-end');
};

export const gameOver = () => ({ type: GAME_OVER });
