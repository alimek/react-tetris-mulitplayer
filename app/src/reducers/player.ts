import { produce } from 'immer';
import { PLAYER_MODEL_CHANGED, PLAYER_MODEL_INDEX_CHANGED, PLAYER_NAME_CHANGED } from 'actions/types';

export enum PlayerModels {
  BATMAN = 'batman',
  WIKING = 'wiking',
  COW = 'cow',
  UFO = 'ufo',
  GHOST = 'ghost',
}

export interface IPlayerStore {
  name: string;
  model: PlayerModels | null;
  currentIndex: number;
}

const initialState: IPlayerStore = {
  name: '',
  model: null,
  currentIndex: 2,
};

export default (state = initialState, action: any = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      case PLAYER_NAME_CHANGED:
        draft.name = action.name;
        break;
      case PLAYER_MODEL_CHANGED:
        draft.model = action.model;
        break;
      case PLAYER_MODEL_INDEX_CHANGED:
        draft.currentIndex = action.index;
        break;
    }
  });
};
