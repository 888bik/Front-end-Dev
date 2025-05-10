import React, { memo } from "react";
async function getData() {
  // 默认情况下，Next.js 会自动缓存服务端 fetch 请求的返回值
  // 但这些情况默认不会自动缓存：
  // 1.在 Server Action 中使用的时候
  // 2.在定义了非 GET 方法的路由处理程序中使用的时候
  // 3.开发模式下默认没有缓存,生产环境下才有
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
  //   cache: "force-cache",
  // });
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Home = memo(async () => {
  const data = await getData();
  return (
    <div className="home">
      Home Page
      {JSON.stringify(data)}
    </div>
  );
});

Home.displayName = "page";
export default Home;
