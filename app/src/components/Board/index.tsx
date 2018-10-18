import * as React from 'react';

import { BoardContainer, Row, Block } from './styles';

type PropTypesType = {
  rows: number[][];
};

class Board extends React.Component<PropTypesType> {
  render() {
    const { rows } = this.props;

    return (
      <BoardContainer>
        {rows.map((row, idy) => {
          return(
          <Row key={`row${idy}`}>
            {row.map((block, idx) => (
              <Block isBlock={block} index={idx} key={`column${idy}${idx}`} />
            ))}
          </Row>
        )})}
      </BoardContainer>
    );
  }
}

export default Board;
