import * as React from 'react';

import { Container, Image } from './styles';

interface ParentProps {

}

const padOne = require('../../assets/new-pad.png');

class PadOne extends React.Component<ParentProps> {
  render() {
    return (
      <Container>
        <Image
          source={padOne}
          resizeMode="contain"
        />
      </Container>
    );
  }
}

export default PadOne;
