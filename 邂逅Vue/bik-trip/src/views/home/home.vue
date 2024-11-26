<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="" />
    </div>
    <keep-alive include="home-search">
      <home-search></home-search>
    </keep-alive>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/homeStore";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearch from "./cpns/home-search.vue"; //获取热门城市
import { storeToRefs } from "pinia";

//获取热门建议请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
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
