import * as React from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import { Container, Image, Touchable, TouchableChild } from './styles';
import { ViewStyle } from 'react-native';

interface ParentProps {
  style?: ViewStyle;
  isClickable?: boolean;
  onPressMoveLeft: () => void;
  onPressMoveRight: () => void;
  onPressMoveTop: () => void;
  onPressMoveDown: () => void;
  onPressRotateLeft: () => void;
  onPressRotateRight: () => void;
}

const padOne = require('../../assets/pad.png');
const padFull = require('../../assets/pad-one-full.png');

class PadOne extends React.Component<ParentProps> {
  interval: any;
  static defaultProps = {
    isClickable: false,
  };

  pressedOut: boolean = false;

  onPressIn = (callback: () => void) => {
    this.pressedOut = false;
    this.vibrateAndRun(callback);
    setTimeout(() => {
      if (!this.pressedOut) {
        this.interval = setInterval(() => this.vibrateAndRun(callback), 100);
      }
    }, 100);
  };

  onPressOut = () => {
    this.pressedOut = true;
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  vibrateAndRun = (callback: () => void): void => {
    ReactNativeHapticFeedback.trigger('impactLight', false);
    callback();
  };

  render() {
    const {
      onPressMoveLeft,
      onPressMoveRight,
      onPressRotateLeft,
      onPressRotateRight,
      onPressMoveDown,
      isClickable,
    } = this.props;

    return (
      <Container style={this.props.style}>
        <Image source={isClickable ? padFull : padOne} resizeMode="contain" />
        {isClickable ? (
          <React.Fragment>
            <Touchable
              onPress={() => this.vibrateAndRun(onPressRotateLeft)}
              style={{
                top: 20,
                left: 108,
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
              onPress={() => this.vibrateAndRun(onPressRotateRight)}
              style={{
                top: 33,
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
                top: 17,
                left: 30,
              }}
            >
              <TouchableChild />
            </Touchable>
            <Touchable
              size={13}
              style={{
                top: 44,
                left: 30,
              }}
              onPressIn={() => this.onPressIn(onPressMoveDown)}
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
              onPressIn={() => this.onPressIn(onPressMoveLeft)}
              onPressOut={this.onPressOut}
              size={13}
              style={{
                top: 31,
                left: 16,
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
              onPressIn={() => this.onPressIn(onPressMoveRight)}
              onPressOut={this.onPressOut}
              size={13}
              style={{
                top: 30,
                left: 44,
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
          </React.Fragment>
        ) : null}
      </Container>
    );
  }
}

export default PadOne;
