// @flow
import React from 'react';
import { connect } from 'react-redux';

import {
  Board,
  OverlayContainer,
  OverlayText,
} from './styles';
import { TetrisBoard, PlayerDetails } from '../../components';
import type { PlayerType } from '../../reducers/players';
import { GAME_STATUS_IN_PROGRESS, GAME_STATUS_OVER, GAME_STATUS_PAUSED } from '../../constants/game';

type PlayerBoardType = {
  player: PlayerType,
  status: string,
};

class PlayerBoard extends React.Component<PlayerBoardType> {
  render() {
    const { player, status } = this.props;

    return (
      <Board>
        <PlayerDetails player={player} />
        <TetrisBoard
          rows={player.board}
        />
        {
          status !== GAME_STATUS_IN_PROGRESS &&
          status !== GAME_STATUS_OVER &&
          status !== GAME_STATUS_PAUSED ?
            <OverlayContainer>
              <OverlayText>{player.isReady ? 'READY' : 'NOT READY'}</OverlayText>
            </OverlayContainer> : null
        }

      </Board>
    );
  }
}

export default connect(
  store => ({
    status: store.app.status,
  }),
)(PlayerBoard);
