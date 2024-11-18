<template>
  <div>
    <h2 ref="titleRef">我是标题</h2>
    <input type="text" ref="inputRef" />
    <button @click="focusInput">聚焦输入框</button>
    <button @click="getInfo">获取信息</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let titleRef = ref();

    let inputRef = ref();

    function getInfo() {
      console.log(inputRef.value);
    }
    function focusInput() {
      inputRef.value.focus();
    }
    return {
      titleRef,
      inputRef,
      getInfo,
      focusInput,
    };
  },
};
</script>

<style lang="scss" scoped></style>
