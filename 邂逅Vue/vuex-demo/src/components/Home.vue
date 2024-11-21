<template>
  <div>
    <!-- 使用state时,需要使用state.moduleName.xxx -->
    <h2>{{ $store.state.counterM.count }}</h2>
    <!-- 使用getters时,直接使用getters.xxx即刻 -->
    <!-- <h3>{{ $store.getters.addCount }}</h3> -->
    <h3>{{ $store.getters["counterM/addCount"] }}</h3>
    <!-- <h4>{{ addCount }}</h4> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // computed: {
  //   ...mapGetters(["addCount"]),
  // },
};
</script>

<style lang="scss" scoped></style>
