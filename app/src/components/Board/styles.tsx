import styled from 'styled-components/native';
import {
  BLOCK_HEIGHT,
  BLOCK_WIDTH,
  COL_NUMBER, ROW_NUMBER,
} from 'constants/game';
import { blockColor, primaryColor, wallColor } from '../../theme';
import DefaultText from 'components/DefaultText';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const BoardContainer = styled.View`
  flex-direction: column;
  flex: 1;
`;

const getBlockColor = (isBlock) => {
  if (isBlock > 0) {
    return primaryColor;
  }

  // if (isBlock === 2) {
  //   return wallColor;
  // }

  return blockColor;
};

export const Block = styled.View<{
  isBlock: number,
  index: number;
}>`
  border: 0.25px solid black;
  width: ${BLOCK_WIDTH - 1}px;
  height: ${BLOCK_HEIGHT - 1}px;
  background-color: ${props => getBlockColor(props.isBlock)};
`;

export const DetailsContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const PlayerName = styled(DefaultText)`
  font-size: 20px;
`;

export const Header = styled(DefaultText)`
  font-size: 20px;
`;

export const Value = styled(DefaultText)`
  font-size: 15px;
`;