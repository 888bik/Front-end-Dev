<template>
  <div class="city-page">
    <div class="top">
      <!-- 搜索框 -->
      <div class="search-box">
        <van-search
          v-model="searchValue"
          show-action
          placeholder="城市/区域/位置"
          @cancel="onCancel"
          shape="round"
        />
      </div>
      <!-- tab的切换 -->
      <div class="tab">
        <van-tabs v-model:active="tabActive" sticky swipeable color="#ff9854">
          <template v-for="(item, key, index) in allCities" :key="key">
            <van-tab :title="item.title" :name="key"></van-tab>
          </template>
        </van-tabs>
      </div>
    </div>

    <!-- 城市内容展示 -->
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>

  </div>
</template>

<script setup>
import router from "@/router";
import CityGroup from "./city-group.vue";
import UseCityStore from "@/stores/modules/cityStore";
//引入文件之后会自动执行js文件,包括函数
import getAllCities from "@/service/request";

import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
const cityStore = UseCityStore();
// 搜索框
const searchValue = ref();
const tabActive = ref();
// 点击搜索框右边取消按钮返回上一页
const onCancel = () => {
  router.back();
};
//从cityStore中获取数据
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
// 获取选中标签后的数据
const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<style lang="less" scoped>
.city-page {
  .top {
    position: relative;
    z-index: 9;
  }

  // 布局滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
