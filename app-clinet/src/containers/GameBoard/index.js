import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, GameOverContainer, GameOverText, GaveOverTextContainer } from './styles';
import { TetrisBoard } from '../../components';
import {
  generateBoardArray,
  getRandomBlock,
  applyPiece,
  intersects,
  killRows, rotateBlockLeft, rotateBlockRight, addLine,
} from '../../utils/game-board';
import { COL_NUMBER, GAME_STATUS_OVER, TICK_MS } from '../../constants/game';
import { onBoardUpdate, onGameOver } from '../../actions/socket';
import { scoreUp } from '../../actions/player';

type GameBoardType = {
  gameStatus: string,
  actions: {
    onGameOver: Function,
    scoreUp: Function,
  },
};

class GameBoard extends React.Component<GameBoardType> {
  constructor(props) {
    super(props);

    this.intervalHandler = setInterval(
      this.tick,
      TICK_MS,
    );
  }

  state = {
    nextBlock: getRandomBlock(),
    currentBlock: getRandomBlock(),
    rows: generateBoardArray(),
    pieceY: 0,
    pieceX: 3,
    addLines: 0,
  };

  componentWillUnmount() {
    clearInterval(this.intervalHandler);
  }

  getRows = () => applyPiece(
    this.state.rows,
    this.state.currentBlock,
    this.state.pieceY,
    this.state.pieceX,
  );

  intervalHandler;

  tick = () => {
    const { gameStatus, actions } = this.props;
    const {
      rows,
      currentBlock,
      nextBlock,
      pieceX,
      pieceY,
      addLines,
    } = this.state;

    if (gameStatus === GAME_STATUS_OVER) {
      return false;
    }

    let newRows = rows;

    if (addLines > 0) {
      newRows = this.addExtraLine(addLines);
    }

    // check if block hit something, if not move it
    if (!intersects(newRows, currentBlock, pieceY + 1, pieceX)) {
      this.setState({ pieceY: pieceY + 1 });
      return true;
    }

    newRows = this.getRows();
    // If block hit wall, generate new rows
    this.setState({ rows: newRows });

    // check if we can remove full rows, if so render without them
    const r = killRows(newRows);
    if (r.numRowsKilled) {
      newRows = r.rows;
      this.setState({ rows: newRows });
      const extraPoints = r.numRowsKilled > 3 ? r.numRowsKilled * 0.5 : 0;
      actions.scoreUp(r.numRowsKilled * 10 + extraPoints);
    }

    // check if next block hit wall at beginning
    // if not, nextBlock = current and generate next one
    if (!intersects(newRows, nextBlock, 0, COL_NUMBER / 2 - 2)) {
      this.setState({
        currentBlock: this.state.nextBlock,
        pieceY: 0,
        pieceX: 3,
        nextBlock: getRandomBlock(),
      });

      return true;
    }

    actions.onGameOver();
    clearInterval(this.intervalHandler);
    return true;
  };

  rotateLeft = () => {
    const newBlock = rotateBlockLeft(this.state.currentBlock);
    if (!intersects(this.state.rows, newBlock, this.state.pieceY, this.state.pieceX)) {
      this.setState({ currentBlock: newBlock });
    }
  };

  rotateRight = () => {
    const newBlock = rotateBlockRight(this.state.currentBlock);
    if (!intersects(this.state.rows, newBlock, this.state.pieceY, this.state.pieceX)) {
      this.setState({ currentBlock: newBlock });
    }
  };

  moveLeft = () => {
    if (!intersects(this.state.rows, this.state.currentBlock, this.state.pieceY, this.state.pieceX - 1)) {
      this.setState({ pieceX: this.state.pieceX - 1 });
    }
  };

  moveRight = () => {
    if (!intersects(this.state.rows, this.state.currentBlock, this.state.pieceY, this.state.pieceX + 1)) {
      this.setState({ pieceX: this.state.pieceX + 1 });
    }
  };

  letFall = () => {
    if (!intersects(this.state.rows, this.state.currentBlock, this.state.pieceY + 2, this.state.pieceX)) {
      this.setState({ pieceY: this.state.pieceY + 2 });
    }
  };

  addExtraLine = (amount) => {
    const newRows = addLine(this.state.rows, amount);

    this.setState({
      rows: newRows,
      addLines: 0,
    });

    return newRows;
  };

  render() {
    const {
      rows,
      currentBlock,
      pieceX,
      pieceY,
    } = this.state;
    const { gameStatus, actions } = this.props;

    const applied = applyPiece(rows, currentBlock, pieceY, pieceX);
    actions.onBoardUpdate(applied);

    return (
      <Container>
        <TetrisBoard
          rows={applied}
          moveLeft={this.moveLeft}
          moveRight={this.moveRight}
          rotateLeft={this.rotateLeft}
          rotateRight={this.rotateRight}
          fallDown={this.letFall}
        />
        {
          gameStatus === GAME_STATUS_OVER ?
            <GameOverContainer>
              <GaveOverTextContainer>
                <GameOverText>GAME OVER</GameOverText>
              </GaveOverTextContainer>
            </GameOverContainer> : null
        }
      </Container>
    );
  }
}

export default connect(
  store => ({
    gameStatus: store.game.status,
  }),
  dispatch => ({
    actions: bindActionCreators({
      onBoardUpdate,
      onGameOver,
      scoreUp,
    }, dispatch),
  }),
)(GameBoard);
