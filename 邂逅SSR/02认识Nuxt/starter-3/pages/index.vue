<template>
  <div>
    <h1>hello nuxt</h1>
  </div>
  <NuxtLink to="/detail/18">Detail Page</NuxtLink>
  <NuxtLink to="/about-admin/90">About Page</NuxtLink>
  <button @click="gotoDetail">gotoDetail</button>
  <button @click="goToAbout">goToAbout</button>
</template>
<script setup>
function gotoDetail() {
  return navigateTo(
    {
      path: "/detail",
      query: {
        id: 200,
      },
    },
    {
      replace: true, //是否替换当前页面,而不是压入栈的操作
    }
  );
}
function goToAbout() {
  return navigateTo("/about");
}
//局部注册中间件
definePageMeta({
  middleware: [
    function (to, from) {
      console.log(to);
      console.log(from);
      console.log("第一个中间件");
    },
    function (to, from) {
      console.log("第二个中间件");
    },
    "format",
  ],
});
</script>
