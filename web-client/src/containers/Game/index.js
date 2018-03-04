// @flow
import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  HeaderContainer,
  PlayersContainer,
  PlayerBoard,
} from './styles';
import { Header, PlayerDetails } from '../../components';
import { Menu, Player } from '../index';
import { getRandomBlock } from '../../utils/game-board';
import type { PlayerType } from '../../reducers/players';

type GamePropType = {
  started: boolean,
  players: Array<PlayerType>,
}

type GameStateType = {
  nextBlock: number[],
}

class Game extends React.Component<GamePropType, GameStateType> {
  state = {
    nextBlock: getRandomBlock(),
  };

  renderPlayers = () => {
    const { started, players } = this.props;
    const { nextBlock } = this.state;

    if (!started) {
      return null;
    }

    return (
      <PlayersContainer>
        {
          players.map(player => (
            <PlayerBoard key={player.id}>
              <PlayerDetails player={player} />
              <Player
                player={player}
                nextBlock={nextBlock}
              />
            </PlayerBoard>
          ))
        }
      </PlayersContainer>

    );
  };

  render() {
    return (
      <Container>
        <HeaderContainer>
          <Header>Multiplayer Tetris</Header>
          <Menu />
        </HeaderContainer>
        {this.renderPlayers()}
      </Container>
    );
  }
}

export default connect(
  store => ({
    started: store.app.started,
    players: store.players.players,
    isGameOver: store.app.gameOver,
  }),
)(Game);
