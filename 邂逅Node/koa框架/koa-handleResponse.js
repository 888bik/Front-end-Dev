const koa = require("koa");
const router = require("koa-router");
const fs = require("fs");

const app = new koa();
const userRouter = new router({ prefix: "/users" });

userRouter.get("/", (context, next) => {
  //body的类型是string
  // context.body = "user list data";

  //body的类型是Buffer
  // context.body = Buffer.from("hello world");

  //body的类型是Stream
  // const readStream = fs.createReadStream(
  //   "./uploads/b762aad4d9ed09a28f40c8f01.jpg"
  // );
  // context.type = "image/jpeg";
  // context.body = readStream;

  //body的类型是数据(array/object)
  context.status = 201;
  context.body = {
    code: 1001,
    data: [
      { id: 111, name: "iphone" },
      {
        id: 222,
        name: "mi",
      },
    ],
  };
});
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("服务器开启成功");
});
