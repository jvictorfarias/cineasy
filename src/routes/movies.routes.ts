import { Router } from 'express';

import ListMoviesService from '../services/ListMoviesService';

const moviesRouter = Router();

moviesRouter.get('/:title', async (request, response) => {
  const { title } = request.params;

  const listMoviesService = new ListMoviesService();

  const moviesList = await listMoviesService.execute({ title });

  return response.status(200).json(moviesList);
});

export default moviesRouter;
