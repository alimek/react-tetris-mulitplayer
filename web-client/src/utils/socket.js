import io from 'socket.io-client';
import store from '../store';
import { playerJoined, playerLeft } from '../actions/players';

const socket = io('http://localhost:8080', {
  autoConnect: false,
});

socket.on('connect', () => {
  socket.emit('join-monitor');
});

socket.on('player-joined', player => store.dispatch(playerJoined(player)));
socket.on('player-left', player => store.dispatch(playerLeft(player)));

export default socket;
