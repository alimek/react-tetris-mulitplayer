import { PLAYER_JOINED, PLAYER_LEFT, RESET_PLAYERS } from '../constants/players';

export type PlayerType = {
  id: number,
  name: string,
  score: number,
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
    default:
      return state;
  }
};
