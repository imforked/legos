import type { ErrorRequestHandler } from 'express';
import type { HttpError, ErrorHandlerResult } from '../index.types';

export const createErrorHandler = (
  onError?: (err: unknown) => ErrorHandlerResult | void
): ErrorRequestHandler => {
  return (err, _req, res, _next) => {
    // User message override
    if (onError) {
      const result = onError(err);
      if (result) {
        const { status = 500, body = { error: 'Internal Server Error' } } =
          result;
        res.status(status).json(body);
        return;
      }
    }

    // Default message
    if ((err as any)?.isHttpError) {
      const e = err as HttpError;
      res.status(e.statusCode).json({
        message: e.message,
        details: e.details,
      });
      return;
    }

    // Fallback message
    console.error('Unhandled Error:', err instanceof Error ? err.stack : err);
    res.status(500).json({ error: 'Internal Server Error' });
  };
};
