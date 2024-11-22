import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import { createWebHistory } from "vue-router";
//创建router对象
const router = createRouter({
  //指定采用的模式:hash
  // history: createWebHashHistory(),
  history: createWebHistory(),
  //配置路由的映射
  routes: [
    //首页重定向
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      component: () => import("../views/Home.vue"),
      children: [
        {
          //home重定向,进入home页面就进入哪个组件
          path: "",
          redirect: "/home/product",
        },
        {
          path: "product",
          component: () => import("../views/Product.vue"), //子路由的路径,实际地址是/home/product
        },
        {
          path: "message",
          component: () => import("../views/Message.vue"), //子路由的路径,实际地址是/home/message
        },
      ],
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
      name: "about-router",
      meta: {
        name: "bik",
        age: 19,
      },
    },
    {
      path: "/profile",
      component: () => import("../views/Profile.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/user/:id",
      component: () => import("../views/User.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});
router.beforeEach((to, from) => {
  //要跳到about页面时会先跳到login页面
  if (to.path === "/about") {
    return "/login";
  }
});
export default router;
