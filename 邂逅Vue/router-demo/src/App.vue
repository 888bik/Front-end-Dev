<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
  <router-view></router-view>
  <!-- 渲染匹配的路由组件 -->
</template>

<script setup>
import About from "./views/About.vue";
import Home from "./views/Home.vue";
</script>

<style lang="scss" scoped></style>
