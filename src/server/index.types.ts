import type { RequestHandler } from 'express';
import type { RequestMethod } from './valueTypes';
import { CorsOptions } from 'cors';

export interface Route {
  path: string;
  method: RequestMethod;
  requestHandler: RequestHandler;
}

export interface Server {
  routes?: Route[];
  middleware?: RequestHandler[];
  onError?: (err: unknown) => { status?: number; body?: any } | void;
  corsOptions?: CorsOptions
}

export interface HttpError {
  statusCode: number;
  message: string;
  details?: unknown;
  isHttpError: true;
}

export type ErrorHandlerResult = { status?: number; body?: any };
