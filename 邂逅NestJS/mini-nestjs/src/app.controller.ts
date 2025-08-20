import { Controller, Get, Req, Request, Inject } from "./@nestjs/common";
import {
  LoggerService,
  Test,
  UseFactory,
  UseValueService,
} from "./logger.service";

@Controller("abc")
export class AppController {
  constructor(
    private loggerService: LoggerService,
    @Inject("StringToken") private useValueService: UseValueService
  ) {}

  @Inject("FactoryToken")
  public useFactory: UseFactory;

  @Inject(Test)
  public test: Test;

  @Get("test")
  index() {
    this.loggerService.log("logger");
    this.useValueService.log("useValueService");
    this.useFactory.log("");
    this.test.log("test")
    return "hello nest";
  }
}
