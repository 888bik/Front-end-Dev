const EventEmitter = require("events");

//创建evenEmitter实例
const emitter = new EventEmitter();

//监听事件
emitter.on("bik", () => {
  console.log("监听到bik事件");
});

//发射事件
setTimeout(() => {
  emitter.emit("bik");
}, 2000);
