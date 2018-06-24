import * as R from 'ramda';

const KNIGHT_MOVEMENTS = [
  { x: 2, y: 1 },
  { x: 1, y: 2 },
  { x: -2, y: -1 },
  { x: -1, y: -2 },
  { x: -2, y: 1 },
  { x: -1, y: 2 },
  { x: 2, y: -1 },
  { x: 1, y: -2 },
];

export const getSquareName = (x, y) =>
  String.fromCharCode(97 + x) + (y + 1);

export const getCoordinatesFromNotation = (notation) => {
  const values = notation.match(/^([A-Za-z+])(\d+)$/).slice(1);

  return {
    x: values[0].toLowerCase().charCodeAt(0) - 97,
    y: values[1] - 1,
  };
};

export const getMovementsFromPiece = (piece, cols = 8, rows = 8) => {
  const values = piece.match(/^([A-Za-z])(\w+)$/).slice(1);

  const position = getCoordinatesFromNotation(values[1]);

  return KNIGHT_MOVEMENTS
    .map(R.mergeWith(R.add, position))
    .filter(({ x, y }) => x >= 0 && x < cols && y >= 0 && y < rows)
    .map(({ x, y }) => {
      let notation = getSquareName(x, y);

      if (values[0] === values[0].toUpperCase()) {
        notation = notation.toUpperCase();
      }

      return notation;
    });
};
