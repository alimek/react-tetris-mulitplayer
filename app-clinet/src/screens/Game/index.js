import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import socket from '../../utils/socket';

import {
  Container,
  Label,
  Side,
  SideContainer,
  Header,
  Buttons,
  Menu,
  Button,
  ButtonText,
  BottomButton,
} from './styles';
import type { PlayerType } from '../../reducers/player';
import { fallDown, moveLeft, moveRight, rotateLeft, rotateRight } from '../../actions/game';

type GameType = {
  player: PlayerType,
  gameStarted: boolean,
  navigation: {
    goBack: Function,
  },
  actions: {
    rotateLeft: Function,
    rotateRight: Function,
    moveLeft: Function,
    moveRight: Function,
    fallDown: Function,
  },
};

class Game extends React.Component<GameType> {
  static navigationOptions = {
    header: false,
  };

  constructor(props) {
    super(props);

    socket.connect();
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  render() {
    const {
      player,
      navigation,
      gameStarted,
      actions,
    } = this.props;

    return (
      <Container>
        <SideContainer>
          <Menu>
            <Button onPress={() => navigation.goBack()}>
              <ButtonText>Leave game</ButtonText>
            </Button>
          </Menu>
          <Header>
            <Label>{`Your name: ${player.name}`}</Label>
            <Label>{`Player number: ${player.id}`}</Label>
            <Label>{`Your score: ${player.score}`}</Label>
          </Header>
          {
            gameStarted ?
              <Fragment>
                <Buttons>
                  <Side>
                    <BottomButton
                      padding={50}
                      onPress={actions.rotateLeft}
                    >
                      <ButtonText size={20}>Rotate Left</ButtonText>
                    </BottomButton>
                    <BottomButton
                      padding={50}
                      onPress={actions.moveLeft}
                    >
                      <ButtonText size={30}>Left</ButtonText>
                    </BottomButton>
                  </Side>
                  <Side>
                    <BottomButton
                      padding={50}
                      onPress={actions.rotateRight}
                    >
                      <ButtonText size={20}>Rotate Right</ButtonText>
                    </BottomButton>
                    <BottomButton
                      padding={50}
                      onPress={actions.moveRight}
                    >
                      <ButtonText size={30}>Right</ButtonText>
                    </BottomButton>
                  </Side>
                </Buttons>
                <BottomButton
                  padding={50}
                  onPress={actions.fallDown}
                >
                  <ButtonText size={30}>Fall</ButtonText>
                </BottomButton>
              </Fragment> :
              <Label>Game not started yet</Label>
          }
        </SideContainer>
      </Container>
    );
  }
}

export default connect(
  store => ({
    gameStarted: store.game.started,
    player: store.player,
  }),
  dispatch => ({
    actions: bindActionCreators({
      moveLeft,
      moveRight,
      rotateRight,
      rotateLeft,
      fallDown,
    }, dispatch),
  }),
)(Game);
