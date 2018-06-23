import * as Chess from './';

describe('Chess', () => {
  describe('getSquareName', () => {
    test('(3, 2) must return c4', () => {
      expect(
        Chess.getSquareName(3, 2),
      ).toBe('c4');
    });
  });

  describe('getCoordinatesFromNotation', () => {
    test('c4 must return (3, 2)', () => {
      expect(
        Chess.getCoordinatesFromNotation('c4'),
      ).toEqual({
        x: 3,
        y: 2,
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
        expect.arrayContaining(['B1', 'C2', 'C4']),
      );
    });
  });
});
