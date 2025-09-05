import { Observable, tap } from "rxjs";
import { ExecutionContext, NestInterceptor } from "..";

export class Logging2Interceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next
  ): Observable<any> | Promise<Observable<any>> {
    console.log("Before2...");
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After2... ${Date.now() - now}ms`)));
  }
}
