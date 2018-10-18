import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, GameContainer, UserDetailsContainer, Label } from './styles';
import { Block, PadOne, PadThree, PadTwo } from 'components';
import { GameOverModal, TetrisBoard } from 'containers';
import { moveDown, moveLeft, moveRight, rotateLeft, rotateRight, start, } from 'actions/game';
import { IPlayerStore, PlayerPad } from 'reducers/player';
import { IStore } from '../../store';
import { PadContainer } from 'screens/Game/styles';
import { GameStatus } from 'reducers/game';
import PlayerAvatar from 'components/PlayerAvatar';

interface ParentProps {
  gameStatus: string;
  player: IPlayerStore;
  nextBlock: number[][];
}

interface DispatchProps {
  actions: {
    start: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    moveDown: () => void;
    rotateLeft: () => void;
    rotateRight: () => void;
  };
}

const pads = {
  [PlayerPad.ONE]: PadOne,
  [PlayerPad.TWO]: PadTwo,
  [PlayerPad.THREE]: PadThree,
};

type Props = ParentProps & DispatchProps;

class GameBoard extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    props.actions.start();
  }

  // tick = () => {
  //   // check if next block hit wall at beginning
  //   // if not, nextBlock = current and generate next one
  //   if (!intersects(newRows, nextBlock, 0, COL_NUMBER / 2 - 2)) {
  //     console.log('ustawiam nowy klocek', nextBlock);
  //     this.setState({
  //       currentBlock: nextBlock,
  //       pieceY: 0,
  //       pieceX: COL_NUMBER / 2 - 2,
  //       nextBlock: getRandomBlock(),
  //     });
  //
  //     return true;
  //   }
  // };

  // addExtraLine = (amount: number): number[][] => {
  //   const newRows = addLine(this.state.rows, amount);
  //
  //   this.setState({
  //     rows: newRows,
  //     addLines: 0,
  //   });
  //
  //   return newRows;
  // };

  render() {
    const { nextBlock, actions, gameStatus, player } = this.props;

    const Pad: any = pads[player.pad || PlayerPad.ONE];

    return (
      <Container>
        <Label>{player.name}</Label>
        <GameContainer>
          <TetrisBoard />
          <UserDetailsContainer>
            <Label>NEXT</Label>
            <Block block={nextBlock} />
            <PlayerAvatar name={player.model}/>
            <Label>SCORE</Label>
            <Label>{player.score}</Label>
          </UserDetailsContainer>
        </GameContainer>
        {Pad ? (
          <PadContainer>
            <Pad
              style={{
                transform: [
                  {
                    scale: 2.5,
                  },
                ],
              }}
              onPressMoveLeft={actions.moveLeft}
              onPressMoveRight={actions.moveRight}
              onPressRotateLeft={actions.rotateLeft}
              onPressRotateRight={actions.rotateRight}
              onPressMoveDown={actions.moveDown}
            />
          </PadContainer>
        ) : null}
        <GameOverModal isVisible={gameStatus === GameStatus.OVER} />
      </Container>
    );
  }
}

export default connect(
  (store: IStore) => ({
    gameStatus: store.game.status,
    player: store.player,
    nextBlock: store.game.nextBlock,
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        moveLeft,
        moveRight,
        moveDown,
        rotateLeft,
        rotateRight,
        start,
      },
      dispatch,
    ),
  }),
)(GameBoard);
