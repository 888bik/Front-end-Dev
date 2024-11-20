<template>
  <div>
    <button @click="add">+</button>
    <span>当前计数:{{ $store.state.counter }}</span>
    <button @click="sub">-</button>
    <span> 年龄:{{ $store.state.age }} 姓名:{{ $store.state.name }} </span>
    <button @click="changeInfo">修改</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeInfo() {
      this.$store.commit("changeInfo","zsd");
    },
    add() {
      this.$store.commit("add");
    },
    sub() {
      this.$store.commit("sub");
    },
  },
};
</script>
<script setup>
import { createStore } from "vuex";

const store = createStore();
</script>

<style lang="scss" scoped></style>
