import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  BackButton,
  ButtonText,
  StatusText,
  Row,
  Text,
} from './styles';
import type { PlayerType } from '../../reducers/player';

type GameMenuPropTypes = {
  connected: boolean,
  goBack: Function,
  player: PlayerType,
};

class GameMenu extends React.Component<GameMenuPropTypes> {
  render() {
    const { connected, goBack, player } = this.props;

    return (
      <Container>
        <Row>
          <BackButton
            onPress={goBack}
            inverted
            rounded
          >
            <ButtonText>Leave game</ButtonText>
          </BackButton>
          <StatusText isConnected={connected}>
            {`Status: ${connected ? 'Connected' : 'Disconnected'}`}
          </StatusText>
        </Row>
        <Row>
          <Text align="left">{`Name: ${player.name} (#${player.id})`}</Text>
          <Text align="right">{`Your score: ${player.score}`}</Text>
        </Row>
      </Container>
    );
  }
}

export default connect(
  store => ({
    connected: store.app.connected,
    player: store.player,
  }),
)(GameMenu);
