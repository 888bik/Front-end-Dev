import { Controller, Get, Req, Request } from "./@nestjs/common";

@Controller("abc")
export class AppController {
  @Get("test")
  index(@Req req: number, @Request request: string) {
    console.log(req, request);
    return "hello nest";
  }
}
