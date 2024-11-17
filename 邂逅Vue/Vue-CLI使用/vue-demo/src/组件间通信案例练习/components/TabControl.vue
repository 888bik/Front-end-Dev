<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div
        class="tab-control-item"
        @click="clickItem(index)"
        :class="{ active: index === currentIndex }"
      >
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  //接收父组件传递过来的数据
  props: {
    titles: {
      type: Array,
    },
  },
  emits: ["clickItem"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index;
      this.$emit("clickItem", index);
    },
  },
};
</script>

<style scoped>
.tab-control-item {
  flex: 1;
}
.tab-control {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.tab-control-item.active span {
  border-bottom: 3px solid red;
  padding: 8px;
}
.active {
  color: aqua;
  font-weight: 800;
}
</style>
