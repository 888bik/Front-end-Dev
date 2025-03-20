const express = require("express");
const app = express();

/** 用户的接口 */
// 1.将用户的接口直接定义在app中
// app.get('/users', (req, res, next) => {})
// app.get('/users/:id', (req, res, next) => {})
// app.post('/users', (req, res, next) => {})
// app.delete('/users/:id', (req, res, next) => {})
// app.patch('/users/:id', (req, res, next) => {})

//将用户的接口定义在单独的路由对象中
const userRouter = express.Router();
userRouter.get("/", (req, res, next) => {
  res.json("用户列表数据");
});
userRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.json("获取某一个用户数据:" + id);
});
userRouter.post("/", (req, res, next) => {
  res.json("注册用户成功");
});
userRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.json(`删除用户${id}成功`);
});
userRouter.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  res.json(`修改用户${id}成功`);
});

app.use("/users", userRouter);

app.listen(6000, () => {
  console.log("服务器开启成功");
});
