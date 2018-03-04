import { GAME_STATUS_WAITING } from '../constants/game';
import { GAME_STATUS_UPDATED } from '../constants/socket';

export type GameType = {
  status: string,
};

const initialState = {
  status: GAME_STATUS_WAITING,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_STATUS_UPDATED:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
