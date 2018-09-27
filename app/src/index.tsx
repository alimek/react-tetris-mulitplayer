import * as React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AppNavigator from './redux-navigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
