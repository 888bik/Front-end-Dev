import React, { memo } from "react";
import { Link, Outlet, useRoutes } from "react-router-dom";

const Home = memo(() => {
  return (
    <div>
      <h2>Home Page</h2>

      {/* 动态路由传递参数 */}
      <Link to="/home/recommend/123">推荐</Link>

      {/* 以下方式也可以使用navigate传递 */}
      {/* 查询字符串传递参数 */}
      <Link to="/home/ranking?userId=abc">排行</Link>

      {/* 路由状态传递参数 */}
      <Link to="/home/more" state={{ name: "bik", id: 123 }}>
        更多
      </Link>

      {/* 渲染子路由:占位 */}
      <Outlet></Outlet>
    </div>
  );
});

export default Home;
