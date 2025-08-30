import { Response as ExpressResponse } from "express";
import {
  Controller,
  Get,
  Query,
  Headers,
  Session,
  Ip,
  Param,
  Request,
  Post,
  Body,
  Req,
  Response,
  HttpCode,
  Header,
  Next,
  Redirect,
} from "../@nestjs/common";
import { User } from "./user.decorator";

@Controller("/user")
export class UserController {
  @Get("custom")
  customParamDecorator(@User("role") role, @User() user) {
    console.log("user", user);
    console.log("role", role);
    return user;
  }

  @Get("/redirect")
  @Redirect("/user/getAllUser", 301)
  handleRedirect() {
    return "redirect";
  }

  @Get("/redirect2")
  handleRedirect2(@Query("version") version) {
    return { url: `https://docs.nestjs.com/${version}/`, statusCode: 301 };
  }

  @Get("next")
  handleNext(@Next() next: any) {
    next();
  }

  @Get("passthrough")
  passthrough(@Response({ passthrough: true }) response: ExpressResponse) {
    //但是有些我只是想添个响应头，仅此而矣，我不想负责响应体的发送
    response.setHeader("key", "value");
    //response.send('send');
    //response.json({success:true});
    //还是想返回一个值让Nest帮我们进行发送响应体操作
    return `response`;
  }

  @Get("response")
  handleResponse(@Response() res: ExpressResponse) {
    console.log(res);
    res.send("hello nest");
  }

  @HttpCode(201)
  @Header("Cache-Control", "none") //向客户端发送一个响应头
  @Header("key1", "value1")
  @Header("key2", "value2")
  @Post("create")
  createUser(@Body() createUserDto, @Body("username") username: string) {
    console.log("createUserDto", createUserDto);
    console.log("username", username);
    return `user created`;
  }

  @Get("star/ab*de")
  handleWildcard(@Req() req: any) {
    console.log(req.params.de);
    return `handleWildcard`;
  }

  @Get(":username/info/:age")
  getUserNameInfo(
    @Param() params,
    @Param("username") username: string,
    @Param("age") age: string
  ) {
    console.log("params", params);
    console.log("username", username);
    console.log("age", age);
    return `age:${age}`;
  }

  @Get("getIp")
  getIp(@Ip() ip: string) {
    console.log("ip", ip);
    return `ip:${ip}`;
  }

  @Get("getSession")
  handleSession(
    @Session() session: any,
    @Session("pageView") pageView: string
  ) {
    console.log(session);
    console.log("session", session);
    console.log("pageView", pageView);
    if (session.pageView) {
      session.pageView++;
    } else {
      session.pageView = 1;
    }
    return `pageView:${session.pageView}`;
  }

  @Get("getHeaders")
  handleHeader(@Headers() header: any, @Headers("host") host: string) {
    return host;
  }

  @Get("queryString")
  handleQuery(@Query() query: any, @Query("id") id: string) {
    return id;
  }

  @Get("getAllUser")
  getAllUser() {
    return "allUsers";
  }
}
