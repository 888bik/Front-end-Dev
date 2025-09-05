import { Observable } from "rxjs";

// 创建一个 Observable（可观察对象）
const observable = new Observable((subscriber) => {
  subscriber.next(1); //发出一个值 1
  subscriber.next(2); //发出一个值 2
  subscriber.next(3); //发出一个值 3
  subscriber.complete(); //通知订阅者"完成",不会再发出值
});

//subscription表示一个对observable的订阅
//通过subscription，可以取消订阅，也可以组合多个订阅
const subscription = observable.subscribe({
  next(value) {
    console.log("value", value);
  },
  error(error) {
    console.log("error", error);
  },
  complete() {
    console.log("complete");
  },
});
