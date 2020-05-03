import request from 'supertest';

import app from '../app';

describe('Movies', () => {
  it('should be able to list movies', async () => {
    const response = await request(app)
      .get('/movies')
      .query({ title: 'titanic' });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          Title: expect.any(String),
          Year: expect.any(String),
          imdbID: expect.any(String),
          Poster: expect.any(String),
          imdbRating: expect.any(String),
        },
      ]),
    );
  });
});
