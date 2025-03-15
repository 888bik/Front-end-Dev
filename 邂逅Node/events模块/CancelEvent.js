const events = require("events");

const emitter = new events();
function handleCallBack() {
  console.log("监听到bik事件");
}
emitter.on("bik", handleCallBack);

setTimeout(() => {
  console.log("hello");
  emitter.off("bik", handleCallBack);
  emitter.emit("bik");
}, 2000);
