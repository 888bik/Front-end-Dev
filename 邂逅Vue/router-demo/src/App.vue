<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/123">用户123</router-link>
    <router-link to="/user/234">用户234</router-link>
  </div>
  <router-view></router-view>
  <!-- 渲染匹配的路由组件 -->
  <!-- <div>
    <button @click="jumpToProfile">跳转profile</button>
  </div> -->
<div>
  <router-link to="/login">登录</router-link>
</div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
function jumpToProfile() {
  // 也可以传入一个对象
  router.replace({
    path: "/profile",
    query: { name: "bik", age: 19 },
  });
  // router.push("/profile");
}
</script>

<style lang="scss" scoped></style>
