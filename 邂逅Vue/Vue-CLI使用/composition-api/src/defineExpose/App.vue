<template>
  <div>
    <children ref="child"> </children>
  </div>
  <button @click="getInfo">获取信息</button>
</template>

<script setup>
import { ref } from "vue";
import children from "./children.vue";

//获取子组件实例
let child = ref(null);
function getInfo() {
  //调用子组件暴露给父组件的方法
  child.value.increment();
}

</script>

<style lang="scss" scoped></style>
