import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';

import AppError from './errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Middleware de tratativa de erros
app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);

export default app;
