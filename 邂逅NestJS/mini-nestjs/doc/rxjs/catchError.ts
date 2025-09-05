import { catchError, of, throwError } from "rxjs";

throwError(() => new Error("an error occurred"))
  .pipe(catchError((error) => of(error)))
  .subscribe(console.log);

//代码可以继续执行
console.log("next");
