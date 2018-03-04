import { CHANGE_NAME, PLAYER_READY, PLAYER_SCORE_UP, SAVE_FROM_SOCKET } from '../constants/player';

export const changeName = name => ({ type: CHANGE_NAME, name });
export const save = data => ({ type: SAVE_FROM_SOCKET, ...data });
export const setPlayerReady = () => ({ type: PLAYER_READY });
export const scoreUp = score => ({ type: PLAYER_SCORE_UP, score });
