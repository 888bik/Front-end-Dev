import React, { memo } from "react";
async function getItem() {
  // 自动缓存结果
  const res = await fetch("https://.../item/1");
  return res.json();
}

// 函数调用两次，但只会执行一次请求
const item: string = await getItem(); // cache MISS
console.log(item);

const Page = memo(async () => {
  // 函数调用两次，但只会执行一次请求
  const item: string = await getItem(); // cache HIT
  console.log(item);
  return <div>Page</div>;
});

Page.displayName = "page";

export default Page;
