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

  it('should be able to list movie details', async () => {
    const response = await request(app).get('/movies/details/tt0120338');

    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject({
      Director: 'James Cameron',
      Actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates',
      Plot:
        'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
      Awards: 'Won 11 Oscars. Another 114 wins & 83 nominations.',
    });
  });
});
