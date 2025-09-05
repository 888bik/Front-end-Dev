import { Observable, tap } from "rxjs";
import { ExecutionContext, NestInterceptor } from "..";

export class Logging3Interceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next
  ): Observable<any> | Promise<Observable<any>> {
    console.log("Before3...");
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After3... ${Date.now() - now}ms`)));
  }
}
