import * as React from 'react';
import { Animated } from 'react-native';

import { Container, BlackMountain } from './styles';
import Background from '../Background';

interface ParentProps {

}

interface State {
  animationLeftRight: Animated.Value
  animationTopDown: Animated.Value
}

type Props = ParentProps;

const background = require('../../assets/bg2.png');
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
        <BlackMountain
          source={mountainBlack}
          style={{
            transform: [
              {
                translateX: animationLeftRight.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [-100, -80, -60],
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
