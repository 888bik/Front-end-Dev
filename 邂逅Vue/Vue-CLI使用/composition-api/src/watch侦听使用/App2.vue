<template>
  <div>
    {{ Message }}
  </div>
  <button @click="changeMessage">修改</button>
  <div>
    {{ Info }}
  </div>
  <button @click="changeInfo">修改</button>
</template>

<script>
import { watch, ref } from "vue";
export default {
  setup() {
    let Message = ref("hello vue");
    let Info = ref("My name is bik");
    function changeMessage() {
      Message.value = "hello bik";
    }
    function changeInfo() {
      Info.value = "My age is 20";
    }
    // watch(Message, (newValue, oldValue) => {
    // console.log("Message:" + oldValue + "发生改变为:" + newValue);
    // });
    watch([Message, Info], () => {
      console.log("Message,Info发生改变");
    });

    return {
      Message,
      changeMessage,
      Info,
      changeInfo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
