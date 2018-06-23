import request from '../providers/supertest';

describe('HomeController', () => {
  describe('preview', () => {
    test('Na3 must highlight B1, C2, C4, B5 in a 8x8 chessboard', async () => {
      const response = await request
        .post('/v1/preview')
        .send({
          pieces: ['Na3'],
        });

      expect(response.statusCode).toBe(200);

      expect(response.body.highlights).toEqual(
        expect.arrayContaining(['B1', 'C2', 'C4', 'B5']),
      );
    });

    test('Na3 nb2 must highlight B1, C2, C4, B5, d1, d3, c4, a4 in a 8x8 chessboard', async () => {
      const response = await request
        .post('/v1/preview')
        .send({
          pieces: ['Na3', 'nb2'],
        });

      expect(response.statusCode).toBe(200);

      expect(response.body.highlights).toEqual(
        expect.arrayContaining(['B1', 'C2', 'C4', 'B5', 'd1', 'd3', 'c4', 'a4']),
      );
    });
  });
});
