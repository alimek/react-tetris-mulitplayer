import { produce } from 'immer';
import { REHYDRATE } from 'redux-persist'
import {
  PLAYER_IS_NOT_READY,
  PLAYER_IS_READY,
  PLAYER_MODEL_INDEX_CHANGED,
  PLAYER_NAME_CHANGED,
  PLAYER_PAD_CHANGED, PLAYER_SCORE_UP,
} from 'actions/types';

export enum PlayerModels {
  BATMAN = 'batman',
  WIKING = 'wiking',
  COW = 'cow',
  UFO = 'ufo',
  GHOST = 'ghost',
}

export enum PlayerPad {
  ONE = 'pad',
  TWO = 'pad2',
  THREE = 'new-pad',
}

export interface IPlayerStore {
  name: string;
  model: PlayerModels | null;
  currentIndex: number;
  pad: PlayerPad | null;
  score: number;
  isReady: boolean;
}

export const players = ['batman', 'ufo', 'wiking', 'ghost', 'cow'];

const initialState: IPlayerStore = {
  name: '',
  model: PlayerModels.WIKING,
  currentIndex: 2,
  pad: null,
  score: 0,
  isReady: false,
};

export default (state = initialState, action: any = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      case REHYDRATE: {
        if (action.payload && action.payload.player) {
          draft.name = action.payload.player.name;
        }
        break;
      }
      case PLAYER_NAME_CHANGED:
        draft.name = action.name;
        break;
      case PLAYER_MODEL_INDEX_CHANGED:
        draft.currentIndex = action.index;
        draft.model = action.model;
        break;
      case PLAYER_PAD_CHANGED:
        draft.pad = action.pad;
        break;
      case PLAYER_SCORE_UP:
        draft.score += action.points;
        break;
      case PLAYER_IS_READY:
        draft.isReady = true;
        break;
      case PLAYER_IS_NOT_READY:
        draft.isReady = false;
        break;
    }
  });
};
