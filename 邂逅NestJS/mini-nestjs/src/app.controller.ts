import { Controller, Get, Req, Request, Inject } from "./@nestjs/common";
import { LoggerService, UseFactory, UseValueService } from "./logger.service";
import { UserService } from "./user.service";

@Controller("app")
export class AppController {
  constructor() {}

  @Get("test")
  index() {
    return "hello nest";
  }
}
