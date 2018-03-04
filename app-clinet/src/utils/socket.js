import io from 'socket.io-client';

import store from '../store';
import { gameStatusUpdated } from '../actions/game';
import { GAME_STATUS_UPDATED, LOGIN_AS_PLAYER, PLAYER_SAVED } from '../constants/socket';
import { onConnected } from '../actions/socket';
import { save } from '../actions/player';

const socket = io('http://192.168.1.35:8080', {
  autoConnect: false,
  transports: ['websocket'],
});

socket.on('connect', () => {
  const { player } = store.getState();
  socket.emit(LOGIN_AS_PLAYER, player.name);
  store.dispatch(onConnected());
});
socket.on(GAME_STATUS_UPDATED, status => store.dispatch(gameStatusUpdated(status)));

socket.on(PLAYER_SAVED, data => store.dispatch(save(data)));
// socket.on('game-started', () => store.dispatch(gameStarted()));
// socket.on('game-end', () => store.dispatch(gameEnd()));
// socket.on('score-up', score => store.dispatch(scoreUp(score)));


export default socket;
