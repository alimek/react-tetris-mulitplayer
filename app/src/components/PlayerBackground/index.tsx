import * as React from 'react';

import { Container, Diamond, LabelBackground, Text } from './styles';

interface IPlayerBackgroundPropTypes {
  name: string | null;
}

const background = require('../../assets/romb.png');
const labelBackground = require('../../assets/pole.png');

class PlayerBackground extends React.Component<IPlayerBackgroundPropTypes> {
  render() {
    const { name } = this.props;
    return (
      <Container>
        <Diamond
          source={background}
        />
        <LabelBackground
          source={labelBackground}
        />
        <Text>{name || "SELECT"}</Text>
      </Container>
    );
  }
}

export default PlayerBackground;
