// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';
import { COL_NUMBER, TICK_MS } from '../../constants/game';
import {
  applyPiece,
  generateBoardArray,
  getRandomBlock,
  intersects,
  killRows,
  rotateBlockLeft, rotateBlockRight,
} from '../../utils/game-board';
import TetrisBoard from '../../components/TetrisBoard';
import { gameOver } from '../../actions/app';

type ActionsType = {
  gameOver: Function,
};

type GamePropType = {
  isGameOver: boolean,
  actions: ActionsType,
}

type GameStateType = {
  nextBlock: number[],
  currentBlock?: number[],
  rows: Array<Array<number>>,
  pieceX: number,
  pieceY: number,
}

class Player extends React.Component<GamePropType, GameStateType> {
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
    const { isGameOver, actions } = this.props;
    const {
      rows,
      currentBlock,
      nextBlock,
      pieceX,
      pieceY,
    } = this.state;

    if (isGameOver) {
      return false;
    }

    let newRows;

    // check if block hit something, if not move it
    if (!intersects(rows, currentBlock, pieceY + 1, pieceX)) {
      this.setState({ pieceY: pieceY + 1 });
      return true;
    }

    newRows = this.getRows();
    // If block hit wall, generate new rows
    this.setState({ rows: newRows });

    // check if we can remove full rows, if so render without them
    const r = killRows(this.state.rows);
    if (r.numRowsKilled) {
      newRows = r.rows;
      this.setState({ rows: newRows });
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

    actions.gameOver();
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
    while (!intersects(this.state.rows, this.state.currentBlock, this.state.pieceY + 1, this.state.pieceX)) {
      this.setState({ pieceY: this.state.pieceY + 1 });
    }
  };

  render() {
    const {
      rows,
      currentBlock,
      pieceX,
      pieceY,
    } = this.state;

    const applied = applyPiece(rows, currentBlock, pieceY, pieceX);

    return (
      <Container>
        <TetrisBoard
          rows={applied}
        />
      </Container>
    );
  }
}

export default connect(
  store => ({
    started: store.app.started,
    isGameOver: store.app.gameOver,
  }),
  dispatch => ({
    actions: bindActionCreators({ gameOver }, dispatch),
  }),
)(Player);
