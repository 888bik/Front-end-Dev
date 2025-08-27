import {
  Controller,
  Get,
  Req,
  Request,
  Inject,
  HttpException,
  HttpStatus,
  BadRequestException,
  Catch,
  CustomExceptionFilter,
  UseFilters,
} from "./@nestjs/common";
import { LoggerService } from "./logger.service";

@Controller("app")
export class AppController {
  constructor() {}

  @Get("test")
  index() {
    // throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
    throw new BadRequestException("请求失败", "111111");
  }

  @Get("custom1")
  custom1() {
    throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  }
}
