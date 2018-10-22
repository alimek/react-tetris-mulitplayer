import * as React from 'react';

import { Container, Image } from './styles';
import { Animated } from 'react-native';

interface ISkyBackgroundPropTypes {}

const sky = require('../../assets/background.gif');

interface State {
  isReady: boolean;
  animated: Animated.Value;
}

class SkyBackground extends React.PureComponent<
  ISkyBackgroundPropTypes,
  State
> {
  state = {
    isReady: false,
    animated: new Animated.Value(0),
  };

  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({
        isReady: true,
      });
      Animated.timing(this.state.animated, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 900);
  }

  render() {
    return (
      <Container>
        {this.state.isReady ? (
          <Image
            source={sky}
            resizeMode="stretch"
            style={{
              opacity: this.state.animated,
            }}
          />
        ) : null}
        {this.props.children}
      </Container>
    );
  }
}

export default SkyBackground;
