import styled from 'styled-components/native';
import { BLOCK_HEIGHT, BLOCK_WIDTH } from 'constants/game';
import { primaryColor } from '../../theme';

export const Container = styled.View`
  flex: 1;
`;

const getBlockColor = (isBlock) => {
  if (isBlock === 1) {
    return primaryColor;
  }

  return 'transparent';
};

export const Board = styled.View`
  width: ${BLOCK_WIDTH * 4 + 3}px;
  position: relative;
  height: ${BLOCK_HEIGHT * 4 + 3}px;
  align-self: flex-start;
`;

export const Column = styled.View<{
  isBlock: boolean,
  index: number;
}>`
  width: ${BLOCK_WIDTH - 1}px;
  height: ${BLOCK_HEIGHT - 1}px;
  position: absolute;
  background-color: ${props => getBlockColor(props.isBlock)};
  left: ${props => BLOCK_HEIGHT * (props.index % 4)}px;
  top: ${props => BLOCK_WIDTH * Math.floor(props.index / 4)}px;
`;