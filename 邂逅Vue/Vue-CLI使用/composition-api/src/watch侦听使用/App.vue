<template>
  <div>
    {{ info }}
  </div>
  <button @click="changeInfo">+</button>
</template>

<script>
import { reactive, watchEffect } from "vue";
export default {
  setup() {
    let info = reactive({
      name: "bik",
      age: 20,
    });
    function changeInfo() {
      info.age++;
    }

    watchEffect(() => {
      //只监听函数中使用的改变的属性
      console.log("数据发生改变:" + info.age);
    });
    // let stopWatch = watchEffect(() => {
    //   console.log("数据发生改变:" + info.age);
    //   if (info.age >= 30) {
    //     stopWatch();
    //   }
    // });

    return {
      changeInfo,
      info,
    };
  },
};
</script>

<style lang="scss" scoped></style>
