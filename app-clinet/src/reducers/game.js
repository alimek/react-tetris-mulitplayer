import { CHANGE_NAME, SAVE_FROM_SOCKET } from '../constants/player';
import { GAME_END, GAME_STARTED } from '../constants/game';

export type GameType = {
  started: boolean,
};

const initialState = {
  started: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FROM_SOCKET:
      return {
        ...state,
        id: action.id,
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case GAME_STARTED:
      return {
        ...state,
        started: true,
      };
    case GAME_END:
      return {
        ...state,
        started: false,
      };
    default:
      return state;
  }
};
