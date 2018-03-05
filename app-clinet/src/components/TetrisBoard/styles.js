import styled from 'styled-components/native';
import {
  BLOCK_HEIGHT,
  BLOCK_WIDTH,
  COL_NUMBER, ROW_NUMBER,
} from '../../constants/game';
import { blockColor, primaryColor, wallColor } from '../../theme';

export const Container = styled.View`
  flex: 1;
`;

export const Board = styled.View`
  width: ${BLOCK_WIDTH * COL_NUMBER + 3}px;
  position: relative;
  height: ${BLOCK_HEIGHT * ROW_NUMBER + 3}px;
  border: 2px solid black;
  align-self: center;
`;

const getBlockColor = (isBlock) => {
  if (isBlock === 1) {
    return primaryColor;
  }

  if (isBlock === 2) {
    return wallColor;
  }

  return blockColor;
};

export const Block = styled.View`
  border: 0.5px solid black;
  width: ${BLOCK_WIDTH - 1}px;
  height: ${BLOCK_HEIGHT - 1}px;
  position: absolute;
  background-color: ${props => getBlockColor(props.isBlock)};
  left: ${props => BLOCK_HEIGHT * (props.index % COL_NUMBER)}px;
  top: ${props => BLOCK_WIDTH * Math.floor(props.index / COL_NUMBER)}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  height: 180px;
`;

export const ButtonColumn = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ButtonRow = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ButtonCenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.theme.primaryColor};
  border-radius: ${props => props.size / 2}px;
  justify-content: center;
  align-items: center;
`;
