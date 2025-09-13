import type { HttpError } from '../index.types.ts';

export const httpError = (
  statusCode: number,
  message: string,
  details?: unknown
): HttpError => ({
  statusCode,
  message,
  details,
  isHttpError: true,
});
