import express from 'express';
import type { Server } from './index.types';
import { createErrorHandler } from './helpers/createErrorHandler.js';
import { httpError } from './helpers/httpError.js';

export const createServer = ({
  routes = [],
  middleware = [],
  onError,
}: Server) => {
  const app = express();

  // Register middleware
  middleware.forEach((mw) => app.use(mw));

  // Register routes
  routes.forEach(({ path, method, requestHandler }) => {
    app[method](path, requestHandler);
  });

  // Global error handling
  app.use(createErrorHandler(onError));

  return app;
};

export * from './index.types';
export { createErrorHandler } from './helpers/createErrorHandler';
export { httpError } from './helpers/httpError';
