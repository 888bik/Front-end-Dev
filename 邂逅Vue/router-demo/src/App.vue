<template>
  <div>
    <home></home>
    <about></about>
  </div>
</template>

<script setup>
import { createRouter, createWebHistory } from "vue-router";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import { createWebHashHistory } from "vue-router";

//配置路由的映射
const routes = [
  { path: "./home", component: Home },
  { path: "./about", component: About },
];

//创建router对象
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
</script>

<style lang="scss" scoped></style>
