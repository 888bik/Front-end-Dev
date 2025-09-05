import { map, Observable, pipe } from "rxjs";
import { ExecutionContext } from "../types/execution-context.interface";
import { NestInterceptor } from "../types/nest-interceptor.interface";

export class Transform implements NestInterceptor {
  intercept(context: ExecutionContext, next: any): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          message: "hello",
        };
      })
    );
  }
}
