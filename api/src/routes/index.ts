import { Router } from 'express';
import moviesRouter from './movies.routes';

const routes = Router();

routes.use('/movies', moviesRouter);

export default routes;
