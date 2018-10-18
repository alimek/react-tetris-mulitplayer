import {
  GAME_BOARD_APPLY_BLOCK,
  GAME_BOARD_MOVE_DOWN,
  GAME_BOARD_MOVE_LEFT,
  GAME_BOARD_MOVE_RIGHT,
  GAME_BOARD_ROTATE_BLOCK,
  GAME_BOARD_UPDATE,
  GAME_END,
  GAME_OVER,
} from './types';
import { applyPiece, hasConflict, killRows, rotateBlockLeft, rotateBlockRight, } from 'utils/game-board';
import { IGameStore } from 'reducers/game';
import { startGame, stopGame } from 'utils/game';
import { COL_NUMBER } from 'constants/game';
import { scoreUp, setPlayerReady } from 'actions/player';
import { AppType, IAppStore } from 'reducers/app';

export const start = () => (dispatch, getState) => {
  const { app }: { app: IAppStore } = getState();

  if (app.type === AppType.SINGLE) {
    dispatch(setPlayerReady());
  }

  startGame();
};

export const onTick = () => (dispatch, getState) => {
  const { game }: { game: IGameStore } = getState();
  let { board } = game;
  const { x, y, currentBlock, nextBlock } = game;

  // check if currentBlock has conflict in x, y
  if (!hasConflict(board, currentBlock, y + 1, x)) {
    // if not, move it one row down
    dispatch(moveToNextRow());
    // repeat
    return;
  }
  // currentBlock has conflict and should be applied to board
  board = dispatch(applyBlock());

  // check if we can remove any rows and if so calculate new board
  const r = killRows(board);
  if (r.numRowsKilled) {
    board = r.rows;
    dispatch(updateBoard(board));
    const extraPoints = r.numRowsKilled >= 2 ? r.numRowsKilled * 2 : 0;
    // if (r.numRowsKilled > 1) {
    //   actions.onDestroyedRows(r.numRowsKilled);
    // }
    dispatch(scoreUp(r.numRowsKilled * 10 + extraPoints));
  }

  if (!hasConflict(board, nextBlock, 0, COL_NUMBER / 2 - 2)) {
    return;
  }

  stopGame();
  dispatch(gameOver());
};

export const updateBoard = (board: number[][]) => ({
  type: GAME_BOARD_UPDATE,
  board,
});

export const moveToNextRow = () => ({
  type: GAME_BOARD_MOVE_DOWN,
});

export const moveLeft = () => (dispatch, getState) => {
  const { game }: { game: IGameStore } = getState();
  const { board, currentBlock, x, y } = game;

  if (!hasConflict(board, currentBlock, y, x - 1)) {
    dispatch({ type: GAME_BOARD_MOVE_LEFT });
  }
};

export const moveRight = () => (dispatch, getState) => {
  const { game }: { game: IGameStore } = getState();
  const { board, currentBlock, x, y } = game;

  if (!hasConflict(board, currentBlock, y, x + 1)) {
    dispatch({ type: GAME_BOARD_MOVE_RIGHT });
  }
};

export const rotateLeft = () => (dispatch, getState) => {
  const { game }: { game: IGameStore } = getState();
  const { board, x, y } = game;
  let { currentBlock } = game;

  currentBlock = rotateBlockLeft(currentBlock);
  if (!hasConflict(board, currentBlock, y, x)) {
    dispatch({ type: GAME_BOARD_ROTATE_BLOCK, currentBlock });
  }
};

export const rotateRight = () => (dispatch, getState) => {
  const { game }: { game: IGameStore } = getState();
  const { board, x, y } = game;
  let { currentBlock } = game;

  currentBlock = rotateBlockRight(currentBlock);
  if (!hasConflict(board, currentBlock, y, x)) {
    dispatch({ type: GAME_BOARD_ROTATE_BLOCK, currentBlock });
  }
};

export const moveDown = () => (dispatch, getState) => {
  const { game }: { game: IGameStore } = getState();
  const { board, currentBlock, x, y } = game;

  if (!hasConflict(board, currentBlock, y + 1, x)) {
    dispatch(moveToNextRow());
  }
};

export const applyBlock = () => (dispatch, getState) => {
  const { game }: { game: IGameStore } = getState();
  const { board, currentBlock, y, x } = game;

  const newBoard = applyPiece(board, currentBlock, y, x);
  dispatch({
    type: GAME_BOARD_APPLY_BLOCK,
    board: newBoard,
  });

  return newBoard;
};

export const gameOver = () => ({ type: GAME_OVER });
export const gameEnd = () => ({ type: GAME_END });
export const onDestroyedRows = destroyedRowsNumber => () => {
  // socket.emit(PLAYER_DESTROYED_ROWS, destroyedRowsNumber);
};
