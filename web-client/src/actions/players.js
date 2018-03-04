import { remove } from 'lodash';

import { PLAYER_JOINED, PLAYER_LEFT, RESET_PLAYERS } from '../constants/players';
import store from '../store';

export const resetPlayers = () => ({ type: RESET_PLAYERS });
export const playerJoined = player => ({ type: PLAYER_JOINED, player });
export const playerLeft = player => (dispatch) => {
  const { players } = store.getState();

  const newPlayers = [...players.players];
  remove(newPlayers, { id: player.id });
  dispatch({ type: PLAYER_LEFT, players: newPlayers });
};
