import produce from 'immer';
import {
  GAME_TYPE_CHANGED,
  SWIPER_INDEX_DECREMENT,
  SWIPER_INDEX_INCREMENT,
} from 'actions/types';

export enum AppType {
  SINGLE = 'single',
  MULTIPLAYER = 'multiplayer',
}

export interface IAppStore {
  type: AppType | null;
  currentIndex: number;
}

const initialState = {
  type: null,
  currentIndex: 0,
};

export default (store = initialState, action: any = {}) => {
  return produce(store, draft => {
    switch (action.type) {
      case GAME_TYPE_CHANGED:
        draft.type = action.gameType;
        break;
      case SWIPER_INDEX_DECREMENT:
        draft.currentIndex -= 1;
        break;
      case SWIPER_INDEX_INCREMENT:
        draft.currentIndex += 1;
        break;
    }
  });
};
