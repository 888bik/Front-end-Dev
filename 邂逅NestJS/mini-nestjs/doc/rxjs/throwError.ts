import { Observable, throwError } from "rxjs";

const observable = throwError(() => new Error("an error occurred"));

observable.subscribe({
  error(error) {
    console.log(error);
  },
});
