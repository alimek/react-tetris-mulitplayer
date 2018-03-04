// @flow
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  Details,
  DetailsText,
} from './styles';

import { Button } from '../../components';
import { endGame, startGame } from '../../actions/app';
import type { PlayerType } from '../../reducers/players';

type MenuPropTypes = {
  actions: {
    startGame: Function,
    endGame: Function,
  },
  started: boolean,
  players: Array<PlayerType>,
};


class Menu extends React.Component<MenuPropTypes> {
  renderStartedGameButtons = () => {
    const { actions } = this.props;

    return (
      <Fragment>
        <Button onClick={actions.endGame}>
          Stop Game
        </Button>
      </Fragment>
    );
  };

  render() {
    const { actions, started, players } = this.props;

    return (
      <Container>
        <Details>
          <DetailsText isLabel>Connected Players:</DetailsText>
          <DetailsText>{players.length}</DetailsText>
        </Details>
        {started ? this.renderStartedGameButtons() : null}
        {
          !started && players.length > 0 ?
            <Button onClick={actions.startGame}>
              Start Game
            </Button> : null
        }
        {players.length === 0 ? <span>Waiting for players</span> : null}
      </Container>
    );
  }
}

export default connect(
  store => ({
    started: store.app.started,
    players: store.players.players,
  }),
  dispatch => ({
    actions: bindActionCreators({ startGame, endGame }, dispatch),
  }),
)(Menu);
