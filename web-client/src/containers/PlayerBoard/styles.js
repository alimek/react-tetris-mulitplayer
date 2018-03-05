import styled from 'styled-components';
import { BLOCK_HEIGHT, BLOCK_WIDTH, COL_NUMBER, ROW_NUMBER } from '../../constants/game';

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: ${COL_NUMBER * BLOCK_WIDTH + 100}px;
  height: ${ROW_NUMBER * BLOCK_HEIGHT + 50}px;
  position: relative;
  border: 2px solid black;
  overflow: auto;
`;


export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverlayText = styled.div`
  background-color: rgba(0,0,0,0.5);
  color: white;
  padding: 20px;
`;
