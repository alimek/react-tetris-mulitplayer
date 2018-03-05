import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { ThemeProvider } from 'styled-components/native';
import { ThemeProvider as UITheme, DefaultTheme } from 'react-native-ios-kit';
import Expo from 'expo';

import store from './src/store';
import { styledComponents, primaryColor } from './src/theme';
import { Home, Game } from './src/screens';

const Navigator = StackNavigator({
  Home: {
    screen: Home,
  },
  Game: {
    screen: Game,
  },
}, {
  cardStyle: {
    backgroundColor: 'white',
  },
});

const moboto = require('native-base/Fonts/Roboto.ttf');
const roboto = require('native-base/Fonts/Roboto_medium.ttf');


export default class App extends React.Component {
  async componentWillMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
    await Expo.Font.loadAsync({
      Moboto: moboto,
      Roboto_medium: roboto,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={styledComponents}>
          <UITheme theme={DefaultTheme}>
            <Navigator />
          </UITheme>
        </ThemeProvider>
      </Provider>
    );
  }
}
