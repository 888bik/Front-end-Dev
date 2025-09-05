import { Observable, of, tap } from "rxjs";
//路由处理函数
function routerHandler() {
  console.log("pay...");
  return "pay";
}
export class Logging1Interceptor {
  intercept(_, next): Observable<any> {
    console.log("Before1...");
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        console.log(`After1... ${Date.now() - now}ms`);
      })
    );
  }
}
export class Logging2Interceptor {
  intercept(_, next): Observable<any> {
    console.log("Before2...");
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        console.log(`After2... ${Date.now() - now}ms`);
      })
    );
  }
}

function executeInterceptors(interceptor) {
  const nextFn = (i = 0): Observable<any> => {
    if (i >= interceptor.length) {
      let result = routerHandler();
      return of(result);
    }
    const result = interceptor[i].intercept(null, {
      handle: () => nextFn(i + 1),
    });
    return result;
  };
  return nextFn();
}

const logging1Interceptor = new Logging1Interceptor();
const logging2Interceptor = new Logging2Interceptor();

executeInterceptors([logging1Interceptor, logging2Interceptor]).subscribe();

/**
Before2...
Before1...
pay...
After1... 3ms
After2... 4ms 
 */
