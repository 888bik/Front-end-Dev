<template>
  <div>
    <children> </children>
  </div>
</template>

<script>
import { provide } from "vue";
import children from "./components/children.vue";
export default {
  components: {
    children,
  },
  setup() {
    let info = {
      name: "bik",
      age: 19,
    };
    let counter = 100;
    provide("info", info);
    provide("counter", counter);
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
