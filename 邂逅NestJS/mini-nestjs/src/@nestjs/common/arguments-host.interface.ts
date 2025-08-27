import { NextFunction, Request, Response } from "express";

export interface ArgumentsHost {
  switchToHttp(): {
    getRequest(): Request;
    getResponse(): Response;
    getNext(): NextFunction;
  };
}
