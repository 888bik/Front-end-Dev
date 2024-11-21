import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import { createWebHistory } from "vue-router";
//创建router对象
const router = createRouter({
  //指定采用的模式:hash
  // history: createWebHashHistory(),
  history:createWebHistory(),
  //配置路由的映射
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/about", component: About },
  ],
});
export default router;
