<template>
  <div>
    <h2>{{ info.name }}</h2>
  </div>
  <div>
    <children
      :info="info"
      message="Hell vue"
      @changeInfo="changeInfo"
    ></children>
  </div>
</template>

<script setup>
import children from "./children.vue";
import { reactive } from "vue";

let info = reactive({
  age: 20,
  name: "bik",
});

function changeInfo() {
  info.age = 21;
}
</script>

<style lang="scss" scoped></style>
