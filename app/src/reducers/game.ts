import produce from 'immer';
import {
  GAME_BOARD_APPLY_BLOCK,
  GAME_BOARD_MOVE_DOWN, GAME_BOARD_MOVE_LEFT, GAME_BOARD_MOVE_RIGHT, GAME_BOARD_ROTATE_BLOCK, GAME_BOARD_UPDATE,
  GAME_OVER,
} from 'actions/types';
import { generateBoardArray, getRandomBlock } from 'utils/game-board';
import { COL_NUMBER } from 'constants/game';

export enum GameStatus {
  WAITING = 'waiting',
  READY = 'ready',
  IN_PROGRESS = 'in-progress',
  PAUSED = 'paused',
  OVER = 'over',
}

export interface IGameStore {
  status: GameStatus;
  board: number[][];
  currentBlock: number[][];
  nextBlock: number[][];
  x: number;
  y: number;
}

const initialState: IGameStore = {
  status: GameStatus.WAITING,
  board: generateBoardArray(),
  nextBlock: getRandomBlock(),
  currentBlock: getRandomBlock(),
  x: COL_NUMBER / 2 - 2,
  y: 0,
};

export default (store = initialState, action: any = {}) => {
  return produce(store, draft => {
    switch (action.type) {
      case GAME_OVER:
        draft.status = GameStatus.OVER;
        break;
      case GAME_BOARD_APPLY_BLOCK:
        draft.board = action.board;
        draft.x = initialState.x;
        draft.y = initialState.y;
        draft.currentBlock = draft.nextBlock;
        draft.nextBlock = getRandomBlock();
        break;
      case GAME_BOARD_MOVE_DOWN:
        draft.y += 1;
        break;
      case GAME_BOARD_MOVE_LEFT:
        draft.x -= 1;
        break;
      case GAME_BOARD_MOVE_RIGHT:
        draft.x += 1;
        break;
      case GAME_BOARD_ROTATE_BLOCK:
        draft.currentBlock = action.currentBlock;
        break;
      case GAME_BOARD_UPDATE:
        draft.board = action.board;
        break;
    }
  });
};
