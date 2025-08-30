import { Request, Response, NextFunction } from "express";
export function loggerFunction(req: Request, res: Response, next: NextFunction) {
  console.log(`logger.function.middleware...`);
  next();
}
