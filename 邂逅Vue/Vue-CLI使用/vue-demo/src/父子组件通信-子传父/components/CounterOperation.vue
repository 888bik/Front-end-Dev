<template>
  <!-- <div>
    <button @click="sub">-</button>
    <button @click="add">+</button>
  </div> -->
  <div>
    <button @click="childEvent">发送</button>
  </div>
</template>

<script>
export default {
  //这里的emits数组不写也可以,但是这样写有利于阅读代码
  emits: ["childEvent"],
  methods: {
    // sub() {
    //   // 通过 $emit 发送事件和数据到父组件
    //   // 子组件可以通过$emit方法携带数据传递给父组件
    //   this.$emit("sub", "hello");
    // },
    // add() {
    //   this.$emit("add");
    // },
    childEvent() {
      this.$emit("childEvent", "hello from child", 20);
    },
  },
};
</script>

<style scoped></style>
