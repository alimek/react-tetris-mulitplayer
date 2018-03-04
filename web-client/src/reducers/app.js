import { GAME_END, GAME_OVER, GAME_START, RESTORE_GAME } from '../constants/app';

const initialState = {
  ready: true,
  started: false,
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
    default:
      return state;
  }
};
