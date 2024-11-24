<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="" />
    </div>
    <home-search></home-search>
  </div>
</template>

<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue';
import HomeSearch from './cpns/home-search.vue';
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 100px;
}
.banner {
  img {
    width: 100%;
  }
}
</style>
