// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  Header,
  Label,
  Input,
  Button,
  ButtonText,
} from './styles';
import { changeName } from '../../actions/player';

type HomePropType = {
  name: string,
  navigation: {
    navigate: Function,
  },
  actions: {
    changeName: Function,
  },
};

class Home extends React.Component<HomePropType> {
  static navigationOptions = {
    header: false,
  };

  render() {
    const { name, actions, navigation } = this.props;
    return (
      <Container>
        <Header>Multiplayer Tetris</Header>
        <Label>Your name</Label>
        <Input
          value={name}
          onChangeText={actions.changeName}
        />

        <Button
          disabled={name.length < 3}
          onPress={() => navigation.navigate('Game')}
        >
          <ButtonText>Join Game</ButtonText>
        </Button>
      </Container>
    );
  }
}

export default connect(
  store => ({
    name: store.player.name,
  }),
  dispatch => ({
    actions: bindActionCreators({ changeName }, dispatch),
  }),
)(Home);
