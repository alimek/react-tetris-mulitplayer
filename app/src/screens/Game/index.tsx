import * as React from 'react';

import { Container } from './styles';
import { BackButton } from 'containers';

interface ParentProps {}

class Game extends React.Component<ParentProps> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
    title: 'GAME',
    headerTitleStyle: {
      fontFamily: 'Peepo',
      fontSize: 25,
    },
    headerLeft: <BackButton />,
  };

  render() {
    return <Container />;
  }
}

export default Game;
