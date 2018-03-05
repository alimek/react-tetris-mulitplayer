// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  Details,
  DetailsText,
} from './styles';

import { endGame, startGame } from '../../actions/app';
import type { PlayerType } from '../../reducers/players';

type MenuPropTypes = {
  players: Array<PlayerType>,
  status: string,
};

class Menu extends React.Component<MenuPropTypes> {
  render() {
    const { players, status } = this.props;

    return (
      <Container>
        <Details>
          <DetailsText isLabel>Connected Players:</DetailsText>
          <DetailsText>{players.length}</DetailsText>
        </Details>
        {status}
        {players.length === 0 ? <span>Waiting for players</span> : null}
      </Container>
    );
  }
}

export default connect(
  store => ({
    status: store.app.status,
    players: store.players.players,
  }),
  dispatch => ({
    actions: bindActionCreators({ startGame, endGame }, dispatch),
  }),
)(Menu);
