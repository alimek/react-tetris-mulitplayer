import * as React from 'react';

import { Board, Column } from './styles';
import { flatten } from 'utils/game-board';

interface IBlockPropTypes {
  block: number[][],
}

class Block extends React.Component<IBlockPropTypes> {
  render() {
    const { block } = this.props;

    const flattened = flatten(block);

    return (
      <Board>
        {flattened.map((isBlock, idx) => (
          <Column isBlock={isBlock} index={idx} key={idx} />
        ))}
      </Board>
    );
  }
}

export default Block;
