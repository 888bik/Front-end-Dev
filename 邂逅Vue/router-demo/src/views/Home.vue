<template>
  <div>
    <button>Home</button>
    <h2>我是首页</h2>
    <router-link to="/home/product">商品列表</router-link>
    <router-link to="/home/message">消息列表</router-link>
  </div>
  <h3>嵌套路由</h3>
  <!-- 占位,会被匹配路由的组件替换掉 -->
  <router-view></router-view>
</template>

<script setup></script>

<style lang="scss" scoped></style>
