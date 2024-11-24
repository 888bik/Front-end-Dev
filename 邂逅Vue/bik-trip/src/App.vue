<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar :tabbarData="tabbarData"></tab-bar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbarData.js";
import home from "@/views/home/home.vue";
import TabBar from '@/components/home/TabBar.vue';
</script>

<style lang="less" scoped>

</style>
