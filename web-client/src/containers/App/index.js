import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '../../store';
import theme from '../../theme';
import { Game } from '../../containers';

export default class App extends React.Component {
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
