import { Controller, Get } from "./@nestjs/common";
import { UserService } from "./user.service";

@Controller("/logger")
export class LoggerController {
  constructor(private userService: UserService) {}

  @Get("/test")
  index() {
    this.userService.create(9999);
    return "hello logger";
  }
}
