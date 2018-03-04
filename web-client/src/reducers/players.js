import { PLAYER_JOINED, PLAYER_LEFT, RESET_PLAYERS } from '../constants/players';
import { RESTORE_GAME } from '../constants/app';
import { PLAYER_BOARD_UPDATED } from '../constants/socket';

export type PlayerType = {
  id: number,
  name: string,
  score: number,
  board: Array<Array<number>>,
};

const initialState = {
  players: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_PLAYERS:
      return {
        ...state,
        players: initialState,
      };
    case PLAYER_JOINED:
      return {
        ...state,
        players: [
          ...state.players,
          action.player,
        ],
      };
    case PLAYER_LEFT:
      return {
        ...state,
        players: [...action.players],
      };
    case RESTORE_GAME:
      return {
        ...state,
        players: action.players,
      };
    case PLAYER_BOARD_UPDATED:
      return {
        ...state,
        players: action.players,
      };
    default:
      return state;
  }
};
