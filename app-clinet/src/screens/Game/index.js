// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, WaitingText, WaitingContainer } from './styles';
import { GameBoard, GameMenu } from '../../containers';
import {
  GAME_STATUS_IN_PROGRESS, GAME_STATUS_OVER, GAME_STATUS_PAUSED,
  GAME_STATUS_WAITING
} from '../../constants/game';
import socket from '../../utils/socket';
import { onDisconnected } from '../../actions/socket';

type GamePropTypes = {
  status: string,
  navigation: {
    goBack: Function,
  },
  actions: {
    onDisconnected: Function,
  },
};

class Game extends React.Component<GamePropTypes> {
  static navigationOptions = {
    header: false,
  };

  constructor(props) {
    super(props);
    socket.connect();
  }

  componentWillUnmount() {
    socket.disconnect();
    this.props.actions.onDisconnected();
  }

  render() {
    const { status, navigation } = this.props;

    return (
      <Container>
        <GameMenu goBack={() => navigation.goBack()} />
        {
          status === GAME_STATUS_IN_PROGRESS ||
          status === GAME_STATUS_PAUSED ||
          status === GAME_STATUS_OVER ?
            <GameBoard /> : null
        }
        {
          status === GAME_STATUS_WAITING ?
            <WaitingContainer>
              <WaitingText>Waiting to start game</WaitingText>
            </WaitingContainer> : null
        }
      </Container>
    );
  }
}

export default connect(
  store => ({
    status: store.game.status,
  }),
  dispatch => ({
    actions: bindActionCreators({
      onDisconnected,
    }, dispatch),
  }),
)(Game);
