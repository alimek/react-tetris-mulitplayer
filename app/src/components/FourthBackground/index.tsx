import * as React from 'react';
import { Animated } from 'react-native';

import { Container, Lamp, BlackMountain } from './styles';
import Background from '../Background';

interface ParentProps {

}

interface State {
  animationLeftRight: Animated.Value
  animationTopDown: Animated.Value
}

type Props = ParentProps;

const background = require('../../assets/bg4.png');
const lamp = require('../../assets/lamp2.png');
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
        <Background
          source={background}
        />
        <Lamp
          source={lamp}
          style={{
            transform: [
              {
                scale: 0.7,
              },
              {
                translateX: animationLeftRight.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-15, -10],
                })
              },
              {
                translateY: animationTopDown.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-20, -20]
                })
              }
            ]
          }}
        />
        <BlackMountain
          source={mountainBlack}
          style={{
            opacity: 0.7,
            transform: [
              {
                translateX: animationLeftRight.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [-30, -20, -10],
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
