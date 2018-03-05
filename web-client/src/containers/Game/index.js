// @flow
import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  HeaderContainer,
  PlayersContainer,
} from './styles';
import { Header } from '../../components';
import { Menu, PlayerBoard } from '../index';
import type { PlayerType } from '../../reducers/players';

type GamePropType = {
  players: Array<PlayerType>,
}

type GameStateType = {
  nextBlock: number[],
}

class Game extends React.Component<GamePropType, GameStateType> {
  render() {
    const { players } = this.props;

    return (
      <Container>
        <HeaderContainer>
          <Header>Multiplayer Tetris</Header>
          <Menu />
        </HeaderContainer>
        <PlayersContainer>
          {
            players.map(player => (
              <PlayerBoard
                key={player.id}
                player={player}
              />
            ))
          }
        </PlayersContainer>
      </Container>
    );
  }
}

export default connect(
  store => ({
    players: store.players.players,
    status: store.app.status,
  }),
)(Game);
