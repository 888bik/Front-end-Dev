import { HttpStatus } from "./http-status.enum";

export class HttpException extends Error {
  //response 参数定义了 JSON 响应体，可以是如下所述的 string 或 object 类型。
  //status 参数定义了 HTTP 状态码
  private readonly response: string | object;
  private readonly status: HttpStatus;

  constructor(response: string | object, status: HttpStatus) {
    super();
    this.response = response;
    this.status = status;
  }

  getResponse(): string | object {
    return this.response;
  }

  getStatus(): HttpStatus {
    return this.status;
  }
}
export class BadRequestException extends HttpException {
  constructor(message: string, error?: string) {
    super(
      { message, error, statusCode: HttpStatus.BAD_REQUEST },
      HttpStatus.BAD_REQUEST
    );
  }
}
export class ForbiddenException extends HttpException {
  constructor(message: string, error: string = "Forbidden") {
    super(
      { message, error, statusCode: HttpStatus.FORBIDDEN },
      HttpStatus.FORBIDDEN
    );
  }
}
export class BadGatewayException extends HttpException {
  constructor() {
    super("Bad Gateway", HttpStatus.BAD_GATEWAY);
  }
}
export class RequestTimeoutException extends HttpException {
  constructor() {
    super("Request Timeout", HttpStatus.REQUEST_TIMEOUT);
  }
}
