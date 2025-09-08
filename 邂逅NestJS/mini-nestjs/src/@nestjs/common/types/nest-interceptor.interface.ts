import { Observable } from "rxjs";
import { ExecutionContext } from "./execution-context.interface";
import { CallHandler } from "./call-handler.interface";
export interface NestInterceptor<T = any, R = any> {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<any> | Promise<Observable<any>>;
}
