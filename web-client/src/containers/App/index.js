import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '../../store';
import theme from '../../theme';
import { Game } from '../../containers';
import socket from '../../utils/socket';

export default class App extends React.Component {
  constructor() {
    super();

    socket.connect();
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Game />
        </ThemeProvider>
      </Provider>
    );
  }
}
