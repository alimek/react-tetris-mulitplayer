import { produce } from 'immer';
import { PLAYER_NAME_CHANGED } from 'actions/types';

export interface IPlayerStore {
  name: string;
}

const initialState: IPlayerStore = {
  name: 'd',
};

export default (state = initialState, action: any = {}) => {
  return produce(state, draft => {
    switch(action.type) {
      case PLAYER_NAME_CHANGED:
        draft.name = action.name;
        break;
    }
  })
};
