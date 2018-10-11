import * as React from 'react';

import { Container, Text, Header } from './styles';
import { SecondBackground } from 'components';
import { BackButton } from 'containers';

interface IAboutPropTypes {

}

class About extends React.Component<IAboutPropTypes> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerLeft: <BackButton />,
  };

  render() {
    return (
      <Container>
        <SecondBackground />
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
