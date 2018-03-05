import { GAME_STATUS_WAITING, WALLS_APPLIED } from '../constants/game';
import { GAME_STATUS_UPDATED, OTHER_PLAYER_DESTROYED_ROWS } from '../constants/socket';

export type GameType = {
  status: string,
  addLines: number,
};

const initialState = {
  status: GAME_STATUS_WAITING,
  addLines: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_STATUS_UPDATED:
      return {
        ...state,
        status: action.status,
      };
    case OTHER_PLAYER_DESTROYED_ROWS:
      return {
        ...state,
        addLines: action.amount,
      };
    case WALLS_APPLIED:
      return {
        ...state,
        addLines: 0,
      };
    default:
      return state;
  }
};
