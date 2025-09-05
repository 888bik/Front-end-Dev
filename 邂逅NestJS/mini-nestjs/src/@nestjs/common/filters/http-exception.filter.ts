import type { ArgumentsHost } from "../types/arguments-host.interface";
import type { ExceptionFilter } from "../types/exception-filter.interface";
import { HttpStatus } from "../types/http-status.enum";
import { HttpException } from "./http-exception";

/**
 * 过滤器处理类型为 HttpException（及其子类）的异常。
 * 当异常是未识别的（既不是 HttpException 也不是继承自 HttpException 的类），
 * 内置的异常过滤器会生成以下默认的 JSON 响应：{"statusCode": 500,"message": "Internal server error"}
 */
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    if (exception instanceof HttpException) {
      if (typeof exception.getResponse() === "string") {
        response.status(exception.getStatus()).json({
          statusCode: exception.getStatus(),
          message: exception.getResponse(),
        });
      } else {
        response.status(exception.getStatus()).json(exception.getResponse());
      }
    } else {
      return response.status(500).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Internal server error",
      });
    }
  }
}
