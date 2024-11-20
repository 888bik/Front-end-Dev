import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";

//创建router对象
const router = createRouter({
  //指定采用的模式:hash
  history: createWebHashHistory(),
  //配置路由的映射
  routes: [
    {path:"./",redirect:"/home"}

  ],
});
