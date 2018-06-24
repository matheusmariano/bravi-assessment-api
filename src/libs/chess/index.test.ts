import * as Chess from './';

describe('Chess', () => {
  describe('getSquareName', () => {
    test('(2, 3) must return c4', () => {
      expect(
        Chess.getSquareName(2, 3),
      ).toBe('c4');
    });
  });

  describe('getCoordinatesFromNotation', () => {
    test('c4 must return (2, 3)', () => {
      expect(
        Chess.getCoordinatesFromNotation('c4'),
      ).toEqual({
        x: 2,
        y: 3,
      });
    });
  });

  describe('getMovementsFromPiece', () => {
    test('Na3 must return B1, C2, C4, B5 in a 8x8 chessboard', () => {
      expect(
        Chess.getMovementsFromPiece('Na3'),
      ).toEqual(
        expect.arrayContaining(['B1', 'C2', 'C4', 'B5']),
      );
    });

    test('Na3 must return B1, C2, C4 in a 4x3 chessboard', () => {
      expect(
        Chess.getMovementsFromPiece('Na3', 4, 3),
      ).toEqual(
        expect.arrayContaining(['B1', 'C2']),
      );
    });
  });
});
