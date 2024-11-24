<template>
  <div class="city-page">
    <!-- 搜索框 -->
    <div class="search">
      <van-search
        v-model="value"
        show-action
        placeholder="城市/区域/位置"
        @cancel="onCancel"
        shape="round"
      />
    </div>
    <div class="tab">
      <van-tabs v-model:active="active" sticky swipeable color="#ff9854">
        <van-tab title="国内-港澳台">
          <city-group></city-group>
        </van-tab>
        <van-tab title="海外">
          <city-group></city-group>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import CityGroup from "./city-group.vue";
const onCancel = () => {
  router.back();
};
</script>

<style lang="less" scoped></style>
