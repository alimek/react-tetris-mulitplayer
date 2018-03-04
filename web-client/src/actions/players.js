import { remove } from 'lodash';

import { PLAYER_JOINED, PLAYER_LEFT, RESET_PLAYERS, SET_PLAYER_LIST } from '../constants/players';
import store from '../store';

export const resetPlayers = () => ({ type: RESET_PLAYERS });
export const playerJoined = player => ({ type: PLAYER_JOINED, player });
export const setPlayerList = players => ({ type: SET_PLAYER_LIST, players });
export const playerLeft = player => (dispatch) => {
  const { players } = store.getState();

  const newPlayers = [...players.players];
  remove(newPlayers, { id: player.id });
  dispatch({ type: PLAYER_LEFT, players: newPlayers });
};
