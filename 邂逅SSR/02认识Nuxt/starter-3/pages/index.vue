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
</script>
