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

const getWallsNumberToBeRemoved = (currentWallsLines, collectedLines) => {
  if (collectedLines === 1 && currentWallsLines === 1) {
    return 0;
  }

  if (collectedLines > currentWallsLines) {
    return currentWallsLines;
  }

  return collectedLines;
};

export const killRows = (rows) => {
  const newRows = [];
  const rowsToClear = [];
  let wallsLine = 0;

  for (let i = ROW_NUMBER - 1; i >= 0; i -= 1) {
    let columnsWithBlock = 0;
    for (let j = 0; j < COL_NUMBER; j += 1) {
      // check if its wall, if so skip this line
      if (rows[i][j] === 2) {
        wallsLine += 1;
        break;
      }

      // if column is 1, then check if whole line is 1
      if (rows[i][j] === 1) {
        columnsWithBlock += 1;
      }

      // if whole line is 1, add line to be removed
      if (columnsWithBlock === COL_NUMBER) {
        rowsToClear.push(i);
      }
    }

    // if line if not full, just leave it as it is
    if (columnsWithBlock !== COL_NUMBER) {
      newRows.push(rows[i].slice());
    }
  }

  const wallsToBeRemoved = getWallsNumberToBeRemoved(wallsLine, rowsToClear.length);
  newRows.splice(0, wallsToBeRemoved);
  const reverseArray = [
    ...generateEmptyRow(rowsToClear.length + wallsToBeRemoved),
    ...newRows.reverse(),
  ];

  return {
    wallsLine,
    rows: reverseArray,
    numRowsKilled: rowsToClear.length,
  };
};

const generateEmptyRow = (amount) => {
  const newRows = [];

  for (let i = 0; i < amount; i += 1) {
    const row = [];
    for (let j = 0; j < COL_NUMBER; j += 1) {
      row[j] = 0;
    }
    newRows.push(row);
  }

  return newRows;
};

export const addLine = (rows, howMany = 1) => {
  rows.splice(0, howMany);

  for (let i = 0; i < howMany; i += 1) {
    const row = [];
    for (let j = 0; j < COL_NUMBER; j += 1) {
      row[j] = 2;
    }
    rows.push(row);
  }

  return rows;
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
