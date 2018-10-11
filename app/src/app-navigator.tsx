import { Animated, Easing } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Menu from 'screens/Menu';
import About from 'screens/About';
import PlayerSelect from 'screens/PlayerSelect';
import SelectPad from 'screens/SelectPad';

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
    Menu: {
      screen: Menu,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    PlayerSelect: {
      screen: PlayerSelect,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    SelectPad: {
      screen: SelectPad,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    About: {
      screen: About,
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
