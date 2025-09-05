import { of, tap } from "rxjs";

of(1, 2, 3, 4)
  .pipe(tap((value) => console.log(value)))
  .subscribe();
