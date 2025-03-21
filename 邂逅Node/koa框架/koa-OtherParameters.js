const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require("koa-router");
const { koaBody } = require("koa-body");
const path = require("path");
const app = new koa();

//使用中间件解析body数据
app.use(bodyParser());
//form-data解析中间件
app.use(
  koaBody({
    multipart: true, // 开启multipart/form-data解析
    formidable: {
      uploadDir: "./uploads", // 文件上传目录
      keepExtensions: true, // 保留文件扩展名
      onFileBegin: (name, file) => {
        const ext = file.originalFilename.split(".").pop();
        file.name = `${Date.now()}.${ext}`;
        file.path = path.join(__dirname, "uploads", file.name);
      },
    },
  })
);
const userRouter = new router({ prefix: "/users" });
//json
userRouter.post("/login", (context, next) => {
  const { username, password } = context.request.body;

  console.log(username, password);
});

//params
userRouter.get("/:id", (context, next) => {
  const id = context.params.id;
  context.body = `user list data:~` + id;
});

//query
userRouter.post("/register", (context, next) => {
  const query = context.query;
  console.log(query);
  context.body = "用户信息" + JSON.stringify(query);
});

//urlencoded
userRouter.post("/urlencoded", (context, next) => {
  const userInfo = context.request.body;

  context.body = "用户的urlencoded信息" + JSON.stringify(userInfo);
});

//form-data
userRouter.post("/formdata", (context, next) => {
  const userInfo = context.request.body;
  context.body = "用户的formdata信息" + JSON.stringify(userInfo);
});
userRouter.post("/upload", (context, next) => {
  const files = context.request.files;
  console.log(files);
  context.body = "文件上传成功";
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("服务器开启成功");
});
