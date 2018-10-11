import { produce } from 'immer';

export interface IPlayerStore {
  name: string | null;
}

const initialState: IPlayerStore = {
  name: null,
};

export default (state = initialState, action: any = {}) => {
  return produce(state, draft => {
    switch(action) {

    }
  })
};
