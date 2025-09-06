import express from 'express';
import type { Server } from './index.types.js';
import { createErrorHandler } from './helpers/createErrorHandler.js';
import { httpError } from './helpers/httpError.js';
import { RequestMethod } from './valueTypes.js';

export const createServer = ({
  routes = [],
  middleware = [],
  onError,
}: Server) => {
  const app = express();

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

// Export runtime values
export { RequestMethod } from './valueTypes.js';
export { createErrorHandler } from './helpers/createErrorHandler.js';
export { httpError } from './helpers/httpError.js';
