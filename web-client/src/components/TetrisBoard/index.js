// @flow
import React from 'react';

import {
  Container,
  Block,
} from './styles';
import { flatten } from '../../utils/game-board';

type PropTypesType = { rows: Array<Array<number>> };

class TetrisBoard extends React.Component<PropTypesType> {
  render() {
    const flattened = flatten(this.props.rows);
    return (
      <Container>
        {
          flattened.map((isBlock, idx) => (
            <Block
              isBlock={isBlock}
              index={idx}
              key={idx}
            />
          ))
        }
      </Container>
    );
  }
}

export default TetrisBoard;
