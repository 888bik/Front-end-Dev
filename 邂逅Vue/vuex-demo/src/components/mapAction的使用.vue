<template>
  <div>
    <h2>{{ $store.state.name }}</h2>
    <button @click="changeInfo('zsd')">修改</button>
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addAction">增加</button>
  </div>
</template>

<script>
export default {
  methods: {
    // 数组写法
    ...mapActions(["addAction"]),
    //对象写法
    ...mapActions({
      changeInfo: "changeInfoAction",
    }),
  },
};
</script>
<script setup>
import { mapActions, useStore } from "vuex";

const store = useStore();
</script>

<style lang="scss" scoped></style>
