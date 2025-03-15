const events = require("events");
const emitter = new events();

function handleCallBack(name, age, height) {
  console.log("监听到bik事件:", name, age, height);
}

emitter.on("bik", handleCallBack);

setTimeout(() => {
  emitter.emit("bik", "zsd", 18, 1.88);
}, 2000);
