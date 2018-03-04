import io from 'socket.io-client';

import store from '../store';
import { save, scoreUp } from '../actions/player';
import { gameEnd, gameStarted } from '../actions/game';

const socket = io('http://192.168.1.35:8080', {
  autoConnect: false,
  transports: ['websocket'],
});

socket.on('connect', () => {
  const { player } = store.getState();
  socket.emit('login', { name: player.name });
});
socket.on('player-saved', data => store.dispatch(save(data)));
socket.on('game-started', () => store.dispatch(gameStarted()));
socket.on('game-end', () => store.dispatch(gameEnd()));
socket.on('score-up', score => store.dispatch(scoreUp(score)));
socket.on('reconnect', () => {
  const { player } = store.getState();
  socket.emit('login', { name: player.name });
});

export default socket;
