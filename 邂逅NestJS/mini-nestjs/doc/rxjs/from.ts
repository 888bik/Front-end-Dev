import { from, Observable } from "rxjs";

const observable = from([1, 2, 3, 4]);
observable.subscribe(console.log); //1,2,3,4而不是[1,2,3,4]
