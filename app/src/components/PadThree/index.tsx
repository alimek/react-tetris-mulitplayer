import * as React from 'react';

import { Container, Image } from './styles';
import { ViewStyle } from 'react-native';

interface ParentProps {
  style?: ViewStyle;
}

const padOne = require('../../assets/new-pad.png');

class PadOne extends React.Component<ParentProps> {
  render() {
    return (
      <Container>
        <Image
          source={padOne}
          resizeMode="stretch"
        />
      </Container>
    );
  }
}

export default PadOne;
