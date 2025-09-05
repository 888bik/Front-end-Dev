import { map, Observable, pipe } from "rxjs";
import { ExecutionContext } from "../types/execution-context.interface";
import { NestInterceptor } from "../types/nest-interceptor.interface";
import { CallHandler } from "../types/call-handler.interface";

export class ExcludeNull implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((value) => {
        console.log("ExcludeNullInterceptor", value);
        return value === null || value === undefined ? "" : value;
      })
    );
  }
}
