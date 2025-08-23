import { Injectable, NestMiddleware } from "./@nestjs/common";
import { LoggerService } from "./logger.service";
import { UserService } from "./user.service";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private loggerService: LoggerService) {}
  use(req: any, res: any, next: (error?: any) => void) {
    this.loggerService.log("loggerService");
    console.log("Req");
    next();
  }
}
