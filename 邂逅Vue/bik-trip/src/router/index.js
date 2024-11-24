import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/home/home.vue"),
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue"),
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue"),
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue"),
    },
  ],
});
export default router;
