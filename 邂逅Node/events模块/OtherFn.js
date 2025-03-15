const events = require("events");

const emitter = new events();

emitter.on("bik", () => {});
emitter.on("bik", () => {});
emitter.on("bik", () => {});
emitter.on("zik", () => {});
emitter.on("dik", () => {});
emitter.on("sik", () => {});
//获取所有监听事件的名称
console.log(emitter.eventNames()); //"bik","zik","dik","sik"

//获取可以监听的最大监听个数
console.log(emitter.getMaxListeners()); //10

//获取到某一个事件名称对应的监听器个数
console.log(emitter.listenerCount("bik")); //3

//获取某一个事件名称对应的监听器函数(数组)
console.log(emitter.listeners("bik")); //()=>{}*3

//事件监听只监听一次(在第一次发射事件的时候进行监听)
emitter.once("bik1", () => {
  console.log("监听bik1事件");
});

//prependListener:将事件监听的优先级提前
emitter.prependListener("bik1", () => {
  console.log("监听到bik1事件(提前)");
});

emitter.emit("bik1"); //once只监听到这一次
emitter.emit("bik1");
emitter.emit("bik1");

//移除所有的事件监听:在不传递事件名称的情况下,会移除所有的监听的事件,如果传递某一个监听事件名称,只会移除对应的监听事件

emitter.removeAllListeners("bik1");
emitter.removeAllListeners();
emitter.emit("bik1");
