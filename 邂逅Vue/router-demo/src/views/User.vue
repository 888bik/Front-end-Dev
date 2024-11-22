<template>
  <div>
    <h2>我是User组件</h2>
    <h3>{{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.id);
  },
};
</script>
<script setup>
import { useRouter } from "vue-router";

const route = useRouter();
</script>

<style lang="scss" scoped></style>
