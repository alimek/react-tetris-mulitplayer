import styled from 'styled-components';
import {
  BLOCK_HEIGHT,
  BLOCK_WIDTH,
  COL_NUMBER,
} from '../../constants/game';

export const Container = styled.div`
  box-sizing: border-box;
  width: ${BLOCK_WIDTH * COL_NUMBER}px;
  position: relative;
  left: 50%;
  margin-left: -${(BLOCK_WIDTH * COL_NUMBER) / 2}px;
`;

const getBlockColor = ({ isBlock, theme }) => {
  if (isBlock) {
    return theme.primaryColor;
  }
  return theme.normalButtonColor;
};

export const Block = styled.div`
  border: 1px solid black;
  width: ${BLOCK_WIDTH - 1}px;
  height: ${BLOCK_HEIGHT - 1}px;
  position: absolute;
  background: ${props => getBlockColor(props)};
  box-sizing: border-box;
  left: ${props => BLOCK_HEIGHT * (props.index % COL_NUMBER)}px;
  top: ${props => BLOCK_WIDTH * Math.floor(props.index / COL_NUMBER)}px;
`;
