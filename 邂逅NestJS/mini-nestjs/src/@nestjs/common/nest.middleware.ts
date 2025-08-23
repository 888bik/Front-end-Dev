import { RequestMethod } from "./index";
import type { NextFunction, Request, Response } from "express";

export interface NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): any;
}

export interface MiddlewareConsumer {
  //表示可以传入任意个中间件
  apply(...middleware): this;
  forRoutes(...routes: IRoute[]): this;
  exclude(...routes: IRoute[]): this;
}

export type IRoute =
  | string
  | { path: string; method: RequestMethod }
  | Function;
