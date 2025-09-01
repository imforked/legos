import type { RequestHandler } from 'express';

enum RequestMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export interface Route {
  path: string;
  method: RequestMethod;
  handler: RequestHandler;
}

export interface Server {
  routes?: Route[];
  middleware?: RequestHandler[];
  onError?: (err: unknown) => { status?: number; body?: any } | void;
}

export interface HttpError {
  statusCode: number;
  message: string;
  details?: unknown;
  isHttpError: true;
}

export type ErrorHandlerResult = { status?: number; body?: any };
