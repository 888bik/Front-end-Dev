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
  Body,
  Param,
  Query,
  Post,
  UsePipes,
} from "./@nestjs/common";
import {
  ParseArrayPipe,
  ParseBoolPipe,
  ParseDefaultPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  ZodValidationPipe,
} from "./@nestjs/common/pipes";
import { ClassValidationPipe } from "./@nestjs/common/pipes/class-validation.pipe";
import { CustomPipe } from "./@nestjs/common/pipes/custom.pipe";
import { CreateCatDto, createCatSchema } from "./create-cat.dto";
import { LoggerService } from "./logger/logger.service";
import { CreateUserDto } from "./user/create-user.dto";

enum UserRole {
  Admin = "Admin",
  User = "User",
}

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

  @Get("getNum/:id")
  getNum(@Param("id", ParseIntPipe) id: number) {
    return typeof id === "number";
  }

  @Get("getFloat/:value")
  getFloat(@Param("value", ParseFloatPipe) value: number) {
    return value;
  }

  @Get("getBool/:value")
  getBool(@Param("value", ParseBoolPipe) value) {
    return typeof value === "boolean";
  }

  @Get("getArray/:arr")
  getArray(
    @Param("arr", new ParseArrayPipe({ items: String, separator: "," }))
    arr: any
  ) {
    console.log(arr);
    return arr;
  }

  @Get("getUUID/:id")
  getUUID(@Param("id", ParseUUIDPipe) id) {
    return id;
  }

  @Get("getEnum/:role")
  getEnum(@Param("role", new ParseEnumPipe(UserRole)) role: UserRole) {
    return role;
  }

  @Get("getDefault")
  getDefaultValue(@Query("name", new ParseDefaultPipe("bik")) name) {
    return name;
  }
  @Get("custom/:value")
  getCustom(@Param("value", CustomPipe) value: any): string {
    return `The custom value is ${value}`;
  }

  //应用 ZodValidationPipe 管道，使用 createCatSchema 进行数据验证
  @Post("cats")
  @UsePipes(new ZodValidationPipe(createCatSchema))
  createCat(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
  }

  @Post("user/create")
  @UsePipes(new ClassValidationPipe())
  async createUser(@Body() createUser: CreateUserDto) {
    console.log(createUser);
    return "hello";
  }

  @Post("users/create/global")
  async createGlobalUser(
    @Body() createUserDto: CreateUserDto
  ): Promise<string> {
    console.log("Global Create User DTO:", createUserDto);
    return "This action adds a new user globally";
  }
}
