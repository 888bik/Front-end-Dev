import { Observable, tap } from "rxjs";
import { ExecutionContext, NestInterceptor } from "..";

export class Logging5Interceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next
  ): Observable<any> | Promise<Observable<any>> {
    console.log("Before5...");
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After5... ${Date.now() - now}ms`)));
  }
}
