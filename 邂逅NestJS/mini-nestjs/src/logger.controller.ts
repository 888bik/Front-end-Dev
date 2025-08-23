import { Controller, Get } from "./@nestjs/common";
import { UserService } from "./user.service";

@Controller("/logger")
export class LoggerController {
  constructor() {}

  @Get("/test")
  index() {
    return "hello logger";
  }
}
