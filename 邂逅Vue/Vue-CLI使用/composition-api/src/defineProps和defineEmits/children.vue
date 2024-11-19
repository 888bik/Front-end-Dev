<template>
  <div>
    <h2>我是子组件的{{ info.name }}</h2>
    <h3>{{ message }}</h3>
    <h4>{{ info.age }}</h4>
    <button @click="changeInfo">修改</button>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
let props = defineProps({
  info: {
    type: Object,
    default: 0,
  },
  message: {
    type: String,
  },
});

let emit = defineEmits(["changeInfo"]);
function changeInfo() {
  emit("changeInfo", 21);
}
console.log(props);
</script>

<style lang="scss" scoped></style>
