import { GAME_END, GAME_OVER, GAME_START } from '../constants/app';

export const startGame = () => ({ type: GAME_START });
export const endGame = () => ({ type: GAME_END });
export const gameOver = () => ({ type: GAME_OVER });
