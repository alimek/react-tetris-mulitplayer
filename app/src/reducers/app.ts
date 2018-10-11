import produce from 'immer';
import { GAME_TYPE_CHANGED } from 'actions/types';

export enum AppType {
  SINGLE = 'single',
  MULTIPLAYER = 'multiplayer',
}

export interface IAppStore {
  type: AppType | null;
}

const initialState = {
  type: null,
};

export default (store = initialState, action: any = {}) => {
  return produce(store, draft => {
    switch (action) {
      case GAME_TYPE_CHANGED:
        draft.type = action.gameType;
        break;
    }
  });
};