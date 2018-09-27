import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Home from 'screens/Home';
import About from 'screens/About';
import SwiperWrapper from 'screens/SwiperWrapper';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
  },
});

const SwiperStack = createStackNavigator({
  Swiper: {
    screen: SwiperWrapper,
  },
});

export default createSwitchNavigator({
  Home: HomeStack,
  Swiper: SwiperStack,
});
