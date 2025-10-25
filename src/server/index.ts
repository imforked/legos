import express from 'express';
import cors from 'cors';
import type { Server } from './index.types.js';
import { createErrorHandler } from './helpers/createErrorHandler.js';
import { ExpectedAction } from './helpers/verifyRecaptcha.js';

export const createServer = ({
  routes = [],
  middleware = [],
  onError,
  corsOptions = {},
}: Server) => {
  const app = express();

  app.use(cors(corsOptions));

  // Add default body parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  middleware.forEach((mw) => app.use(mw));

  routes.forEach(({ path, method, requestHandler }) => {
    app[method](path, requestHandler);
  });

  app.use(createErrorHandler(onError));

  return app;
};

// Export types (only exist at compile time)
export type {
  Server,
  Route,
  HttpError,
  ErrorHandlerResult,
} from './index.types.js';

// Form validation schemas
export { SignUpSchema } from './schemas/index.js';

// Export runtime values
export { RequestMethod } from './valueTypes.js';
export { createErrorHandler } from './helpers/createErrorHandler.js';
export { httpError } from './helpers/httpError.js';
export { verifyRecaptcha, ExpectedAction } from './helpers/verifyRecaptcha.js';
