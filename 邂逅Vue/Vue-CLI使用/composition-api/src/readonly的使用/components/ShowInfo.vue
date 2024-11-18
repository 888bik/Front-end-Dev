<template>
  <div>
    <h2>{{ info.age }}</h2>
    <button @click="changeInfo">修改</button>
  </div>
</template>

<script>
import { reactive, readonly, ref } from "vue";

export default {
  setup() {
    //正常可以修改
    let info = reactive({
      name: "bik",
      age: 19,
    });

    // 使用readonly函数返回就是不可修改的
    let roInfo = readonly(info);
    console.log(roInfo);

    function changeInfo() {
      // info.age = 18;
      roInfo.name = 18;
    }
    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
