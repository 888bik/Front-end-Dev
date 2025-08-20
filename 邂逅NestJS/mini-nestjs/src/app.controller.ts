import { Controller, Get, Req, Request, Inject } from "./@nestjs/common";
import { LoggerService, UseFactory, UseValueService } from "./logger.service";

@Controller("abc")
export class AppController {
  constructor(
    private loggerService: LoggerService,
    @Inject("StringToken") private useValueService: UseValueService
  ) {}

  // @Inject(UseFactory)
  // public useFactory: UseFactory;

  @Get("test")
  index() {
    this.loggerService.log("logger");
    this.useValueService.log("useValueService");
    // this.useFactory.log("");
    return "hello nest";
  }
}
