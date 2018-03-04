import { GAME_END, GAME_OVER, GAME_STARTED } from '../constants/game';

import socket from '../utils/socket';

export const gameStarted = () => ({ type: GAME_STARTED });
export const gameOver = () => ({ type: GAME_OVER });
export const gameEnd = () => ({ type: GAME_END });

export const rotateLeft = () => () => socket.emit('rotate-left');
export const rotateRight = () => () => socket.emit('rotate-right');
export const moveLeft = () => () => socket.emit('move-left');
export const moveRight = () => () => socket.emit('move-right');
export const fallDown = () => () => socket.emit('fall-down');
