import * as React from 'react';

import { Container, Image, Touchable, TouchableChild } from './styles';
import { ViewStyle } from 'react-native';

interface ParentProps {
  style?: ViewStyle;
  onPressMoveLeft: () => void;
  onPressMoveRight: () => void;
  onPressMoveTop: () => void;
  onPressMoveDown: () => void;
  onPressRotateLeft: () => void;
  onPressRotateRight: () => void;
}

const padOne = require('../../assets/pad.png');

class PadOne extends React.Component<ParentProps> {
  interval: any;

  onPressIn = () => {
    this.interval = setInterval(this.props.onPressMoveDown, 100);
  };

  onPressOut = () => {
    clearInterval(this.interval);
  };

  render() {
    const {
      onPressMoveLeft,
      onPressMoveRight,
      onPressRotateLeft,
      onPressRotateRight,
    } = this.props;

    return (
      <Container style={this.props.style}>
        <Image source={padOne} resizeMode="contain" />
        <Touchable
          onPress={onPressRotateLeft}
          style={{
            top: 24,
            left: 105,
          }}
          hitSlop={{
            left: 15,
            right: 15,
            top: 15,
            bottom: 15,
          }}
        >
          <TouchableChild />
        </Touchable>
        <Touchable
          onPress={onPressRotateRight}
          style={{
            top: 37,
            left: 84,
          }}
          hitSlop={{
            left: 15,
            right: 15,
            top: 15,
            bottom: 15,
          }}
        >
          <TouchableChild />
        </Touchable>
        <Touchable
          size={13}
          style={{
            top: 19,
            left: 31,
          }}
        >
          <TouchableChild />
        </Touchable>
        <Touchable
          size={13}
          style={{
            top: 47,
            left: 31,
          }}
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          hitSlop={{
            left: 10,
            right: 10,
            top: 0,
            bottom: 30,
          }}
        >
          <TouchableChild />
        </Touchable>
        <Touchable
          onPress={onPressMoveLeft}
          size={13}
          style={{
            top: 33,
            left: 18,
          }}
          hitSlop={{
            left: 30,
            right: 0,
            top: 5,
            bottom: 5,
          }}
        >
          <TouchableChild />
        </Touchable>
        <Touchable
          onPress={onPressMoveRight}
          size={13}
          style={{
            top: 33,
            left: 43,
          }}
          hitSlop={{
            left: 0,
            right: 30,
            top: 15,
            bottom: 15,
          }}
        >
          <TouchableChild />
        </Touchable>
      </Container>
    );
  }
}

export default PadOne;
