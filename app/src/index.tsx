import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store';
import AppNavigator from './redux-navigator';
import { StatusBar } from 'react-native';

StatusBar.setBarStyle('light-content');

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
