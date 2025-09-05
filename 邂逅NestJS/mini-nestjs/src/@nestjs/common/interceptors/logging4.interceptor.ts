import { Observable, tap } from "rxjs";
import { ExecutionContext, NestInterceptor } from "..";

export class Logging4Interceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next
  ): Observable<any> | Promise<Observable<any>> {
    console.log("Before4...");
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After4... ${Date.now() - now}ms`)));
  }
}
