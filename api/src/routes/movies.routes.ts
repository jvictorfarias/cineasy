import { Router, Request } from 'express';

import ListMoviesService from '../services/ListMoviesService';
import ListMovieDetailsService from '../services/ListMovieDetailsService';

interface Query extends Request {
  query: {
    title: string;
  };
}

const moviesRouter = Router();

moviesRouter.get('/', async (request: Query, response) => {
  const { title } = request.query;

  const listMoviesService = new ListMoviesService();

  const moviesList = await listMoviesService.execute({ title });

  return response.status(200).json(moviesList);
});

moviesRouter.get('/details/:id', async (request, response) => {
  const { id } = request.params;

  const listMovieDetailsService = new ListMovieDetailsService();

  const movieDetails = await listMovieDetailsService.execute({ id });

  return response.status(200).json(movieDetails);
});

export default moviesRouter;
