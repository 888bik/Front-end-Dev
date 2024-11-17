<template>
  <tab-control @click-item="showCurrentContent" :titles="titles"></tab-control>
  <!-- 展示的内容 -->
  <h2>{{ content[this.currentIndex] }}</h2>
</template>

<script>
import TabControl from "./components/TabControl.vue";
export default {
  data() {
    return {
      titles: ["衣服", "鞋子", "裤子"],
      content: ["衣服页面", "鞋子页面", "裤子页面"],
      currentIndex: 0,
    };
  },
  components: {
    TabControl,
  },
  methods: {
    showCurrentContent(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped></style>
