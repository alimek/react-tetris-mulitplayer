import * as React from 'react';

import { Board } from 'components';
import { connect } from 'react-redux';
import { IStore } from '../../store';
import { applyPiece } from 'utils/game-board';

interface ITetrisBoardPropTypes {
  board: number[][],
  block: number[][],
  x: number;
  y: number;
}

class TetrisBoard extends React.Component<ITetrisBoardPropTypes> {
  render() {
    const { block, x, y } = this.props;

    const board = applyPiece(this.props.board, block, y, x);

    return (
      <Board
        rows={board}
      />
    );
  }
}

export default connect(
  (store: IStore) => ({
    board: store.game.board,
    block: store.game.currentBlock,
    x: store.game.x,
    y: store.game.y,
  }),
  null,
)(TetrisBoard);
