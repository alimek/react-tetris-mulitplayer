import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'player',
  ],
};

const middleware = createReactNavigationReduxMiddleware(
  'root',
  (state: IStore) => state.nav,
);

let Reactotron: any = null;

if (__DEV__) {
  require('reactotron-react-native');
  Reactotron = require('./reactotron').default;
}

const createStore =
  Reactotron === null ? reduxCreateStore : Reactotron.createStore;

const persistedReducer = persistReducer(persistConfig, reducers);

// @ts-ignore
const store = createStore(persistedReducer, applyMiddleware(ReduxThunk, middleware));

export const persistor = persistStore(store);

export default store;
