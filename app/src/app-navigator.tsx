import { Animated, Easing } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Game from 'screens/Game';
import SwiperPage from 'screens/SwiperPage';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 450,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return { transform: [{ translateX }] };
    },
  };
};

export default createStackNavigator(
  {
    SwiperPage: {
      screen: SwiperPage,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    Game: {
      screen: Game,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    cardStyle: {
      backgroundColor: '#110627',
    },
    transitionConfig,
  },
);
