import io from 'socket.io-client';
import store from '../store';
import { playerBoardUpdate, playerJoined, playerLeft, setPlayerStatus } from '../actions/players';
import {
  GAME_STATUS_UPDATED,
  LOGIN_AS_MONITOR,
  PLAYER_BOARD_UPDATED,
  PLAYER_JOINED,
  PLAYER_LEFT,
  PLAYER_STATUS,
} from '../constants/socket';
import { setGameStatus } from '../actions/app';

const socket = io('http://localhost:8080', {
  autoConnect: false,
});

socket.on('connect', () => {
  socket.emit(LOGIN_AS_MONITOR);
});

socket.on(PLAYER_JOINED, player => store.dispatch(playerJoined(player)));
socket.on(PLAYER_BOARD_UPDATED, data => store.dispatch(playerBoardUpdate(data)));
socket.on(PLAYER_LEFT, player => store.dispatch(playerLeft(player)));
socket.on(PLAYER_STATUS, player => store.dispatch(setPlayerStatus(player)));
socket.on(GAME_STATUS_UPDATED, status => store.dispatch(setGameStatus(status)));

export default socket;
