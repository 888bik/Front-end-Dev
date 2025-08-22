import { Controller, Get, Req, Request, Inject } from "./@nestjs/common";
import { LoggerService, UseFactory, UseValueService } from "./logger.service";
import { UserService } from "./user.service";

@Controller("abc")
export class AppController {
  constructor(@Inject("CONFIG") private dynamicValue) {}

  @Get("test")
  index() {
    // this.userService.create(99);
    return this.dynamicValue;
  }
}
