import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import reducers from './reducers';
import { IPlayerStore } from 'reducers/player';
import { IAppStore } from 'reducers/app';

export interface IStore {
  player: IPlayerStore;
  nav: any;
  app: IAppStore;
}

const middleware = createReactNavigationReduxMiddleware(
  "root",
  (state: IStore) => state.nav,
);

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk, middleware),
);

export default store;