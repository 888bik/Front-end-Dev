import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  let count = 0;
  const intervalId = setInterval(() => {
    subscriber.next(count++);
  }, 1000);

  // 当 Observable 被取消订阅时清除定时器
  return () => {
    clearInterval(intervalId);
    console.log("unsubscribe");
  };
});

const subscription = observable.subscribe((value) => console.log(value));

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
