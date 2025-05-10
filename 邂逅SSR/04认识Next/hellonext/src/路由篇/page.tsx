"use client";
import React, { memo } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
const Home = memo(() => {
  const router = useRouter();

  return (
    <div className="home">
      Home Page
      <div>
        {/* 使用Link组件实现页面跳转 */}
        <Link href="/about" scroll={false}>
          go to about page
        </Link>
      </div>
      {/* 使用router组件实现,router是客户端组件,需要在顶层标记"use client" */}
      <div>
        <button type="button" onClick={() => router.push("/profile/login")}>
          go to login page
        </button>
      </div>
      {/* 使用redirect组件实现跳转,这是一个服务端组件 */}
      <div>
        <button onClick={() => redirect("/category")}>
          go to category page
        </button>
      </div>
      <div>
        <Link href={"/cart/abc"}>go to cart page</Link>
      </div>
    </div>
  );
});

Home.displayName = "page";
export default Home;
