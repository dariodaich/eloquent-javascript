export function chessboard(size) {
  if (!size || size < 2) {
    return 'Invalid size. To generate a chessboard provide number greater than one.';
  }

  let board = '';
  const charMapping = {
    0: [' ', '#'],
    1: ['#', ' '],
  };

  for (let row = 1; row <= size; row++) {
    const charSet = charMapping[row % 2];

    for (let column = 1; column <= size; column++) {
      board += charSet[column % 2];

      if (column === size) board += '\n';
    }
  }

  return board;
}
