import * as React from 'react';

import { Container, DefaultInput, Square } from './styles';
import { Animated, TextInputProps } from 'react-native';

interface ParentProps {
  value: string;
}

interface State {
  flashing: Animated.Value;
}

const DURATION = 350;

type Props = ParentProps & TextInputProps;

class Input extends React.Component<Props, State> {
  shouldStop: boolean = false;
  state = {
    flashing: new Animated.Value(0),
  };


  hide = () => {
    Animated.timing(
      this.state.flashing,
      {
        toValue: 0,
        duration: DURATION,
        useNativeDriver: true,
      }
    ).start(() => {
      if (!this.shouldStop) {
        this.show();
      }
    });
  };

  show = () => {
    this.shouldStop = false;
    Animated.timing(
      this.state.flashing,
      {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }
    ).start(this.hide);
  };

  stop = () => {
    this.shouldStop = true;
  };

  render() {
    const { value, ...others } = this.props;
    const { flashing } = this.state;

    return (
      <Container>
        <DefaultInput
          value={value}
          placeholderTextColor="white"
          selectionColor="transparent"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={12}
          {...others}
          onFocus={this.show}
          onBlur={this.stop}
        />
        {
          value.length < 12 ?
            <Square
              length={value.length}
              style={{
                opacity: flashing,
              }}
            /> : null
        }
      </Container>
    );
  }
}

export default Input;
