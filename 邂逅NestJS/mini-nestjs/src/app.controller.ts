import { Controller, Get, Req, Request, Inject } from "./@nestjs/common";
import { LoggerService, UseFactory, UseValueService } from "./logger.service";
import { UserService } from "./user.service";

@Controller("abc")
export class AppController {
  constructor(
    private loggerService: LoggerService,
    private userService: UserService
  ) {}

  @Get("test")
  index() {
    // this.userService.create(99);
    this.loggerService.log("loggerService");
    this.userService.create(99)
    return "hello nest";
  }
}
