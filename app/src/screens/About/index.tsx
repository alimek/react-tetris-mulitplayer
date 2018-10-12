import * as React from 'react';

import { Container, Text } from './styles';
import { SecondBackground } from 'components';
import { BackButton } from 'containers';

interface IAboutPropTypes {}

class About extends React.Component<IAboutPropTypes> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTransparent: true,
    title: 'ABOUT',
    headerTitleStyle: {
      fontFamily: 'Peepo',
      fontSize: 25,
    },
    headerTintColor: '#fff',
    headerLeft: <BackButton />,
  };

  render() {
    return (
      <Container>
        <SecondBackground />
        <Text>GM</Text>
        <Text>TF</Text>
        <Text>ES</Text>
        <Text>DD</Text>
      </Container>
    );
  }
}

export default About;
