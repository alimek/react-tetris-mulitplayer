import * as React from 'react';
import { Animated } from 'react-native';

import { Container, Mountain, BlackMountain } from './styles';
import Background from '../Background';

interface ParentProps {

}

interface State {
  animationLeftRight: Animated.Value
  animationTopDown: Animated.Value
}

type Props = ParentProps;

const background = require('../../assets/bg1.png');
const mountainColor = require('../../assets/mudlight.png');
const mountainBlack = require('../../assets/black1.png');

const ANIMATION_LEFT_RIGHT_TIME = 6000;
const ANIMATION_TOP_RIGHT_TIME = 6000;

class FirstBackground extends React.Component<Props, State> {

  state = {
    animationLeftRight: new Animated.Value(0),
    animationTopDown: new Animated.Value(0),
  };

  constructor(props) {
    super(props);

    this.startAnimation();
  }


  startAnimation = () => {
    Animated.parallel([
      Animated.timing(
        this.state.animationLeftRight,
        {
          toValue: 1,
          duration: ANIMATION_LEFT_RIGHT_TIME,
          useNativeDriver: true,
        }
      ),
      Animated.timing(
        this.state.animationTopDown,
        {
          toValue: 1,
          duration: ANIMATION_TOP_RIGHT_TIME,
          useNativeDriver: true,
        }
      )
    ]).start(this.endAnimation);
  };

  endAnimation = () => {
    Animated.parallel([
      Animated.timing(
        this.state.animationLeftRight,
        {
          toValue: 0,
          duration: ANIMATION_LEFT_RIGHT_TIME,
          useNativeDriver: true,
        }
      ),
      Animated.timing(
        this.state.animationTopDown,
        {
          toValue: 0,
          duration: ANIMATION_TOP_RIGHT_TIME,
          useNativeDriver: true,
        }
      )
    ]).start(this.startAnimation);
  };


  render() {
    const { animationTopDown, animationLeftRight } = this.state;

    return (
      <Container>
        <Mountain
          source={mountainColor}
          style={{
            opacity: 0.7,
            transform: [
              {
                translateX: animationLeftRight.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [-150, -100, -80],
                })
              },
              {
                translateY: animationTopDown.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [5, 10, 5]
                })
              }
            ]
          }}
        />
        <Background
          source={background}
        />
        <BlackMountain
          source={mountainBlack}
          style={{
            opacity: 0.7,
            transform: [
              {
                translateX: animationLeftRight.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [-100, -80, -50],
                })
              },
              {
                translateY: animationTopDown.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [20, 15, 20]
                })
              }
            ]
          }}
        />
      </Container>
    );
  }
}

export default FirstBackground;
