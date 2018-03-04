import socket from '../utils/socket';
import { CONNECTED, DISCONNECTED, GAME_OVER, PLAYER_BOARD_UPDATED } from '../constants/socket';
import store from '../store';

export const onBoardUpdate = board => async () => {
  const { player } = store.getState();
  socket.emit(PLAYER_BOARD_UPDATED, { board, score: player.score });
};

export const onConnected = () => ({ type: CONNECTED });
export const onDisconnected = () => ({ type: DISCONNECTED });
export const onGameOver = () => () => socket.emit(GAME_OVER);
