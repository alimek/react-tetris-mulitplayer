import { GAME_END, GAME_OVER, GAME_START, RESTORE_GAME } from '../constants/app';
import { GAME_STATUS_WAITING } from '../constants/game';
import { GAME_STATUS_UPDATED } from '../constants/socket';

const initialState = {
  ready: true,
  status: GAME_STATUS_WAITING,
  gameOver: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        started: true,
        gameOver: false,
      };
    case GAME_END:
      return {
        ...state,
        started: false,
      };
    case GAME_OVER:
      return {
        ...state,
        gameOver: true,
      };
    case RESTORE_GAME:
      return {
        ...state,
        started: action.started,
      };
    case GAME_STATUS_UPDATED:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
