import { catchError, map, Observable, pipe, throwError } from "rxjs";
import { NestInterceptor } from "../types/nest-interceptor.interface";
import { ExecutionContext } from "../types/execution-context.interface";
import { CallHandler } from "../types/call-handler.interface";
import { BadRequestException } from "../filters/http-exception";

export class ErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((error) => {
        return throwError(() => new BadRequestException("bad Request", error));
      })
    );
  }
}
