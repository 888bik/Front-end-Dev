import { ArgumentsHost } from "../types/arguments-host.interface";
import { Catch } from "../decorators/catch.decorator";
import { HttpException } from "./http-exception";
import { ExceptionFilter } from "../types/exception-filter.interface";
import { Inject } from "../decorators/inject.decorator";
// @Catch(HttpException) 装饰器将所需的元数据绑定到异常过滤器，告诉 Nest 这个特定过滤器只查找 HttpException 类型的异常
@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  constructor(@Inject("prefix") private prefix) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: this.prefix,
    });
  }
}
