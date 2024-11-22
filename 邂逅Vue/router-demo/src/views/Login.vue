<template>
  <div>
    <h2>登录界面</h2>
  </div>
  <router-link to="/login/userprofile">profile</router-link>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

//动态添加UserProfile路由
function addUserProfileRouter() {
  router.addRoute({
    path:"/login/userprofile",
    component: import("./UserProfile.vue"),
  });
  //动态添加二级路由
  // router.addRoute({
  //   name: "home",
  //   path: "/home/login",
  // })
}
addUserProfileRouter();
console.log(router);
console.log(router.getRoutes());
</script>

<style lang="scss" scoped></style>
