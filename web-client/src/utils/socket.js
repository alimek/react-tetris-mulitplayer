import io from 'socket.io-client';
import store from '../store';
import { playerBoardUpdate, playerJoined, playerLeft } from '../actions/players';
import { LOGIN_AS_MONITOR, PLAYER_BOARD_UPDATED, PLAYER_JOINED, PLAYER_LEFT } from '../constants/socket';

const socket = io('http://localhost:8080', {
  autoConnect: false,
});

socket.on('connect', () => {
  socket.emit(LOGIN_AS_MONITOR);
});

socket.on(PLAYER_JOINED, player => store.dispatch(playerJoined(player)));
socket.on(PLAYER_BOARD_UPDATED, data => store.dispatch(playerBoardUpdate(data)));
socket.on(PLAYER_LEFT, player => store.dispatch(playerLeft(player)));

export default socket;
