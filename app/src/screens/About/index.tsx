import * as React from 'react';

import { Container, Text, Header } from './styles';
import { Background } from 'components';

interface IAboutPropTypes {

}

const background = require('../../assets/bg2.png');

class About extends React.Component<IAboutPropTypes> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Background
          source={background}
        />
        <Header>About</Header>
        <Text>GM</Text>
        <Text>TF</Text>
        <Text>ES</Text>
        <Text>DD</Text>
      </Container>
    );
  }
}

export default About;
