import * as React from 'react';
import { Animated } from 'react-native';

import { Container, Touchable, Text, ArrowLeft, ArrowRight } from './styles';

const arrow = require('../../assets/arrow1.png');

interface IMenuItemPropTypes {
  text: string;
  index: number;
  onPress: () => void;
}

interface State {
  opacity: Animated.Value;
  arrowScale: Animated.Value;
  showArrows: boolean;
}

const scaleArrowValue = 1.2;
const SIDE_LEFT = 'left';
const SIDE_RIGHT = 'right';

class MenuItem extends React.Component<IMenuItemPropTypes, State> {
  state = {
    opacity: new Animated.Value(0),
    arrowScale: new Animated.Value(1),
    showArrows: false,
  };

  constructor(props) {
    super(props);

    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: props.index * 400,
    }).start();
  }

  onPress = () => {
    this.setState(
      {
        showArrows: true,
      },
      this.animateClick,
    );
  };

  animateClick = () => {
    const { opacity, arrowScale } = this.state;

    Animated.parallel([
      Animated.sequence([
        Animated.timing(arrowScale, {
          toValue: 0,
          duration: 200,
        }),
        Animated.timing(arrowScale, {
          toValue: 1,
          duration: 200,
        }),
      ]),
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 50,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 50,
        }),

        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
        }),
      ]),
    ]).start(this.finishAction);
  };

  finishAction = () => {
    const { onPress } = this.props;

    this.setState({
      showArrows: false,
    });
    onPress();
  };

  getArrowAnimation = (animated: Animated.Value, side: string) => ({
    transform: [
      {
        rotate: `${side === SIDE_LEFT ? -90 : 90}deg`,
      },
      {
        scale: animated.interpolate({
          inputRange: [0, 1],
          outputRange: [scaleArrowValue, 1],
        }),
      },
      {
        translateY: animated.interpolate({
          inputRange: [0, 1],
          outputRange: [-5, 0],
        }),
      },
    ],
  });

  render() {
    const { text } = this.props;
    const { opacity, arrowScale, showArrows } = this.state;

    return (
      <Container>
        <Touchable activeOpacity={1} onPress={this.onPress} disabled={showArrows}>
          {showArrows ? (
            <ArrowLeft
              source={arrow}
              style={this.getArrowAnimation(arrowScale, SIDE_LEFT)}
            />
          ) : null}
          <Text
            clicked={showArrows}
            style={{
              opacity,
            }}
          >
            {text}
          </Text>
          {showArrows ? (
            <ArrowRight
              source={arrow}
              style={this.getArrowAnimation(arrowScale, SIDE_RIGHT)}
            />
          ) : null}
        </Touchable>
      </Container>
    );
  }
}

export default MenuItem;
