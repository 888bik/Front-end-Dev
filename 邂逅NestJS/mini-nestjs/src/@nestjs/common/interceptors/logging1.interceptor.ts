// import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { CallHandler, ExecutionContext, NestInterceptor } from "..";

export class Logging1Interceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<any> | Promise<Observable<any>> {
    console.log("Before1...");
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After1... ${Date.now() - now}ms`)));
  }
}
