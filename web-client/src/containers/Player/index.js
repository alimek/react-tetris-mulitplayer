// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, OverContainer, OverText } from './styles';
import { COL_NUMBER, TICK_MS } from '../../constants/game';
import {
  addLine,
  applyPiece,
  generateBoardArray,
  getRandomBlock,
  intersects,
  killRows,
  rotateBlockLeft, rotateBlockRight,
} from '../../utils/game-board';
import TetrisBoard from '../../components/TetrisBoard';
import { gameOver } from '../../actions/app';
import socket from '../../utils/socket';
import type { PlayerType } from '../../reducers/players';

type ActionsType = {
  gameOver: Function,
};

type GamePropType = {
  isGameOver: boolean,
  actions: ActionsType,
  player: PlayerType,
}

type GameStateType = {
  nextBlock: number[],
  currentBlock?: number[],
  rows: Array<Array<number>>,
  pieceX: number,
  pieceY: number,
  addLines: number,
  over: boolean,
}

class Player extends React.Component<GamePropType, GameStateType> {
  constructor(props) {
    super(props);

    socket.on('move-left', this.moveLeft);
    socket.on('move-right', this.moveRight);
    socket.on('rotate-left', this.rotateLeft);
    socket.on('rotate-right', this.rotateRight);
    socket.on('fall-down', this.letFall);

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
    over: false,
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
    const { isGameOver, actions, player } = this.props;
    const {
      rows,
      currentBlock,
      nextBlock,
      pieceX,
      pieceY,
      addLines,
    } = this.state;

    if (isGameOver) {
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
      socket.emit('score-up', {
        player,
        score: r.numRowsKilled * 10,
      });
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
    this.setState({
      over: true,
    });
    return true;
  };

  rotateLeft = (player) => {
    if (player.id !== this.props.player.id) {
      return;
    }

    const newBlock = rotateBlockLeft(this.state.currentBlock);
    if (!intersects(this.state.rows, newBlock, this.state.pieceY, this.state.pieceX)) {
      this.setState({ currentBlock: newBlock });
    }
  };

  rotateRight = (player) => {
    if (player.id !== this.props.player.id) {
      return;
    }

    const newBlock = rotateBlockRight(this.state.currentBlock);
    if (!intersects(this.state.rows, newBlock, this.state.pieceY, this.state.pieceX)) {
      this.setState({ currentBlock: newBlock });
    }
  };

  moveLeft = (player) => {
    if (player.id !== this.props.player.id) {
      return;
    }

    if (!intersects(this.state.rows, this.state.currentBlock, this.state.pieceY, this.state.pieceX - 1)) {
      this.setState({ pieceX: this.state.pieceX - 1 });
    }
  };

  moveRight = (player) => {
    if (player.id !== this.props.player.id) {
      return;
    }

    if (!intersects(this.state.rows, this.state.currentBlock, this.state.pieceY, this.state.pieceX + 1)) {
      this.setState({ pieceX: this.state.pieceX + 1 });
    }
  };

  letFall = (player) => {
    if (player.id !== this.props.player.id) {
      return;
    }

    while (!intersects(this.state.rows, this.state.currentBlock, this.state.pieceY + 1, this.state.pieceX)) {
      this.setState({ pieceY: this.state.pieceY + 1 });
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
      over,
    } = this.state;

    const applied = applyPiece(rows, currentBlock, pieceY, pieceX);

    return (
      <Container>
        <TetrisBoard
          rows={applied}
        />
        {
          over ?
            <OverContainer>
              <OverText>GAME OVER</OverText>
            </OverContainer> : null
        }
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
