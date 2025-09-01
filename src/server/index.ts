import express from 'express';
import type { Server } from './index.types';
import { createErrorHandler } from './helpers/createErrorHandler';

export const createServer = ({
  routes = [],
  middleware = [],
  onError,
}: Server) => {
  const app = express();

  // Register middleware
  middleware.forEach((mw) => app.use(mw));

  // Register routes
  routes.forEach(({ path, method, handler }) => {
    app[method](path, handler);
  });

  // Global error handling
  app.use(createErrorHandler(onError));

  return app;
};
