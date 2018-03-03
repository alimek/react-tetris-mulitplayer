import { COL_NUMBER, ROW_NUMBER } from '../constants/game';
import { blocks } from '../constants/blocks';

export const generateBoardArray = () => {
  const rows = [];
  for (let i = 0; i < ROW_NUMBER; i += 1) {
    const columns = [];
    for (let j = 0; j < COL_NUMBER; j += 1) {
      columns[j] = 0;
    }
    rows[i] = columns;
  }

  return rows;
};

export const getRandomBlock = () => blocks[Math.floor(Math.random() * blocks.length)];

export const applyPiece = (rows, piece, y, x) => {
  const newRows = [];

  for (let i = 0; i < ROW_NUMBER; i += 1) {
    newRows[i] = rows[i].slice();
  }

  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      if (piece[i][j]) {
        newRows[y + i][x + j] = 1;
      }
    }
  }

  return newRows;
};

export const intersects = (rows, piece, y, x) => {
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      if (piece[i][j]) {
        if (y + i >= ROW_NUMBER || x + j < 0 || x + j >= COL_NUMBER || rows[y + i][x + j]) {
          return true;
        }
      }
    }
  }

  return false;
};

export const killRows = (rows) => {
  const newRows = [];
  let k = ROW_NUMBER;

  for (let i = ROW_NUMBER; i -- > 0;) { // eslint-disable-line
    for (let j = 0; j < COL_NUMBER; j += 1) {
      if (!rows[i][j]) {
        k -= 1;
        newRows[k] = rows[i].slice();
        break;
      }
    }
  }
  for (let i = 0; i < k; i += 1) {
    newRows[i] = [];
    for (let j = 0; j < COL_NUMBER; j += 1) {
      newRows[i][j] = 0;
    }
  }

  return {
    rows: newRows,
    numRowsKilled: k,
  };
};

export const rotateBlockLeft = block => [
  [block[0][3], block[1][3], block[2][3], block[3][3]],
  [block[0][2], block[1][2], block[2][2], block[3][2]],
  [block[0][1], block[1][1], block[2][1], block[3][1]],
  [block[0][0], block[1][0], block[2][0], block[3][0]],
];

export const rotateBlockRight = block => [
  [block[3][0], block[2][0], block[1][0], block[0][0]],
  [block[3][1], block[2][1], block[1][1], block[0][1]],
  [block[3][2], block[2][2], block[1][2], block[0][2]],
  [block[3][3], block[2][3], block[1][3], block[0][3]],
];

export const flatten = arr => arr
  .reduce((acc, val) => acc
    .concat(Array.isArray(val) ? flatten(val) : val), []);
