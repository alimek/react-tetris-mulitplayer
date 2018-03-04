// @flow
import React from 'react';

import {
  Container,
  DetailsText,
  Column,
} from './styles';
import { type PlayerType } from '../../reducers/players';

type PlayerDetailsPropTypes = {
  player: PlayerType,
};

class PlayerDetails extends React.Component<PlayerDetailsPropTypes> {
  render() {
    const { player } = this.props;

    return (
      <Container>
        <Column>
          <DetailsText isLabel>{`#${player.id} ${player.name}`}</DetailsText>
        </Column>
        <Column>
          <DetailsText isLabel>Score:</DetailsText>
          <DetailsText isLabel>{player.score}</DetailsText>
        </Column>
      </Container>
    );
  }
}

export default PlayerDetails;
