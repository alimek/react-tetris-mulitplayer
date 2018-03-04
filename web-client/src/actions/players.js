import { remove, find, cloneDeep } from 'lodash';

import { PLAYER_JOINED, PLAYER_LEFT, RESET_PLAYERS, SET_PLAYER_LIST } from '../constants/players';
import store from '../store';
import { PLAYER_BOARD_UPDATED } from '../constants/socket';

export const resetPlayers = () => ({ type: RESET_PLAYERS });
export const playerJoined = player => ({ type: PLAYER_JOINED, player: { ...player, board: [] } });
export const setPlayerList = players => ({ type: SET_PLAYER_LIST, players });
export const playerLeft = player => (dispatch) => {
  const { players } = store.getState();

  const newPlayers = [...players.players];
  remove(newPlayers, { id: player.id });
  dispatch({ type: PLAYER_LEFT, players: newPlayers });
};

export const playerBoardUpdate = ({ playerId, board, score }) => (dispatch) => {
  const currentStore = store.getState();
  const { players } = currentStore.players;
  const player = find(players, { id: playerId });
  if (player) {
    player.board = board;
    player.score = score;
    dispatch({ type: PLAYER_BOARD_UPDATED, players: cloneDeep(players) });
  }
};
