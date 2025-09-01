import type { HttpError } from '../index.types';

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
