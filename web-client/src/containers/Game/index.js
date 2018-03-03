// @flow
import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
} from './styles';
import { Header } from '../../components';
import { Menu, Player } from '../index';
import { getRandomBlock } from '../../utils/game-board';

type GamePropType = {
  started: boolean,
}

type GameStateType = {
  nextBlock: number[],
}


class Game extends React.Component<GamePropType, GameStateType> {
  state = {
    nextBlock: getRandomBlock(),
  };

  renderPlayers = () => {
    const { started } = this.props;
    const { nextBlock } = this.state;

    if (!started) {
      return null;
    }

    return (
      <Player
        nextBlock={nextBlock}
      />
    );
  };

  render() {
    return (
      <Container>
        <Header>Multiplayer Tetris</Header>
        <Menu />
        {this.renderPlayers()}
      </Container>
    );
  }
}

export default connect(
  store => ({
    started: store.app.started,
    isGameOver: store.app.gameOver,
  }),
)(Game);
