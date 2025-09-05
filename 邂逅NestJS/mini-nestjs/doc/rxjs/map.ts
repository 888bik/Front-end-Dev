import { map, of } from "rxjs";

of(1, 2, 3)
  .pipe(
    map((value) => value * 2),
    map((value) => value * 2)
  )
  .subscribe(console.log);
