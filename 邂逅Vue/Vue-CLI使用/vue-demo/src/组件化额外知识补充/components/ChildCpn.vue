<template>
  <div>
    <button @click="visitParent">获取父组件的信息</button>
  </div>
</template>

<script>
export default {
  methods: {
    childMethod() {
      console.log("我是子组件的方法");
    },
    childFunction() {
      console.log("我是子组件的函数");
    },
    visitParent() {
      console.log(this.$parent.message);
      //这里也可以通过$root来实现,因为App是根组件
      console.log(this.$root.message);
    }
  },
};
</script>

<style scoped></style>
