<template>
  <div class="tab-bar">
    <template v-for="(item, index) in props.tabbarData">
      <div
        class="tab-bar-item"
        @click="tabbarClick(index, item)"
        :class="{ active: currentIndex === index }"
      >
        <span class="text">{{ item.text }}</span>
        <img
          v-if="currentIndex === index"
          :src="getAssetUrl(item.imageActive)"
        />
        <img v-else :src="getAssetUrl(item.image)" />
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbarData.js";
import getAssetUrl from "@/utils/load_assets.js";
import { toRef } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  tabbarData: {
    type: Object,
    default: () => {},
  },
});
const router = useRouter();
const currentIndex = toRef(0);
function tabbarClick(index, item) {
  currentIndex.value = index;
  router.push(item.path);
}
</script>

<style lang="less" scoped>
.tab-bar {
  // z-index: 1;
  // background-color: #ff9854;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 36px;
    }
    .text {
      font-size: 12px;
      margin-top: 2px;
    }
    &.active {
      color: var(--primary-color);
    }
  }
}
</style>
