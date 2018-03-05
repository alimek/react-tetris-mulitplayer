// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-native-ios-kit';

import { Container, WaitingText, WaitingContainer } from './styles';
import { GameBoard, GameMenu } from '../../containers';
import {
  GAME_STATUS_IN_PROGRESS, GAME_STATUS_OVER, GAME_STATUS_PAUSED, GAME_STATUS_READY,
  GAME_STATUS_WAITING
} from '../../constants/game';
import socket from '../../utils/socket';
import { onDisconnected } from '../../actions/socket';
import { togglePlayerReady } from '../../actions/player';
import { startGame } from '../../actions/game';

type GamePropTypes = {
  status: string,
  isReady: boolean,
  navigation: {
    goBack: Function,
  },
  actions: {
    onDisconnected: Function,
    togglePlayerReady: Function,
    startGame: Function,
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
    const {
      status,
      navigation,
      isReady,
      actions,
    } = this.props;

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
          status === GAME_STATUS_WAITING || status === GAME_STATUS_READY ?
            <WaitingContainer>
              {isReady ? <WaitingText>You are ready!</WaitingText> : null}
              {status === GAME_STATUS_WAITING ? <WaitingText>Waiting to all players</WaitingText> : null}
              {status === GAME_STATUS_READY ? <WaitingText>Waiting to start game</WaitingText> : null}
              {
                status === GAME_STATUS_READY ?
                  <Button
                    rounded
                    inverted
                    onPress={actions.startGame}
                  >
                    Start Game
                  </Button> :
                  <Button
                    rounded
                    inverted
                    onPress={actions.togglePlayerReady}
                  >
                    {`I am${isReady ? ' not' : ''} ready`}
                  </Button>
              }
            </WaitingContainer> : null
        }
      </Container>
    );
  }
}

export default connect(
  store => ({
    status: store.game.status,
    isReady: store.player.isReady,
  }),
  dispatch => ({
    actions: bindActionCreators({
      onDisconnected,
      togglePlayerReady,
      startGame,
    }, dispatch),
  }),
)(Game);
