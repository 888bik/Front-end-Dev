<template>
  <div>
    <button @click="add">+</button>
    <span>当前计数:{{ $store.state.counter }}</span>
    <button @click="sub">-</button>
    <span> 年龄:{{ $store.state.age }} 姓名:{{ $store.state.name }} </span>
    <button @click="changeInfo('zsd')">修改</button>
  </div>
</template>

<script>
export default {
  methods: {
    ...mapMutations(["add", "sub"]),
    ...mapMutations({
      changeInfo: "changeInfo",
    }),
  },
};
</script>
<script setup>
import { createStore, mapMutations } from "vuex";

const store = createStore();
//手动的映射和绑定
// const mutations = mapMutations(["changeInfo", "add", "sub"]);
// const newMutations = {};
// Object.keys(mutations).forEach((key) => {
//   newMutations[key] = mutations[key].bind({ $store: store });
// });
// console.log(newMutations);
// const { changeInfo, add, sub } = newMutations;
</script>

<style lang="scss" scoped></style>
