<template>
  <div>
    当前计数:{{ count }}
    <button @click="increment">增加</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

let count = ref(0);
function increment() {
  count.value++;
}

//使用defineExpose来暴露increment方法
defineExpose({
  increment,
});
</script>

<style lang="scss" scoped></style>
