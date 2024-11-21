<template>
  <div>
    <h2>{{ $store.state.name }}</h2>
    <button @click="changeInfoBtnClick">修改姓名</button>
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addBtnClick">action修改</button>
  </div>
</template>

<script>
export default {
  methods: {
    addBtnClick() {
      this.$store.dispatch("addAction");
    },
    changeInfoBtnClick() {
      this.$store.dispatch("changeInfoAction","zsd");
    },
  },
};
</script>
<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<style lang="scss" scoped></style>
