import * as request from 'supertest';
import app from '../providers/routing';

describe('HomeController', () => {
  describe('index', () => {
    test('must return hello world', async () => {
      const response = await request(app).get('/v1');

      expect(response.statusCode).toBe(200);
    });
  });
});
