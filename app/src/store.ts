import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import reducers from './reducers';
import { IPlayerStore } from 'reducers/player';
import { IAppStore } from 'reducers/app';
import { IGameStore } from 'reducers/game';

export interface IStore {
  player: IPlayerStore;
  nav: any;
  app: IAppStore;
  game: IGameStore;
}

const middleware = createReactNavigationReduxMiddleware(
  "root",
  (state: IStore) => state.nav,
);

let Reactotron: any = null;

if (__DEV__) {
  require('reactotron-react-native');
  Reactotron = require('./reactotron').default;
}

const createStore = Reactotron === null
  ? reduxCreateStore
  : Reactotron.createStore;

// @ts-ignore
export default createStore(
  reducers,
  applyMiddleware(ReduxThunk, middleware),
);