import { CHANGE_NAME, PLAYER_READY, PLAYER_SCORE_UP, SAVE_FROM_SOCKET } from '../constants/player';

export type PlayerType = {
  id?: number,
  name: string,
  score: number,
  isReady: boolean,
};

const initialState = {
  id: null,
  name: '',
  score: 0,
  isReady: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PLAYER_READY:
      return {
        ...state,
        isReady: true,
      };
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
    case PLAYER_SCORE_UP:
      return {
        ...state,
        score: state.score + action.score,
      };
    default:
      return state;
  }
};
