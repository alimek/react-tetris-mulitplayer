import { GAME_END, GAME_OVER } from '../constants/game';

import socket from '../utils/socket';
import { GAME_STATUS_UPDATED, PLAYER_DESTROYED_ROWS } from '../constants/socket';

export const gameStatusUpdated = status => ({ type: GAME_STATUS_UPDATED, status });
export const gameOver = () => ({ type: GAME_OVER });
export const gameEnd = () => ({ type: GAME_END });
export const onDestroyedRows = destroyedRowsNumber => () => {
  socket.emit(PLAYER_DESTROYED_ROWS, destroyedRowsNumber);
};

