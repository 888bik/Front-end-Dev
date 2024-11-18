<template>
  <div></div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const counter = inject("counter");
    const info = inject("info");
    console.log(info);
    console.log(counter);
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
