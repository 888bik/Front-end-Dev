<template>
  <div>
    <home> </home>
    <span>{{}}</span>
  </div>
  <button @click="changeNames">修改</button>
</template>

<script>
import { computed } from "vue";
import Home from "./components/Home.vue";
export default {
  components: {
    Home,
  },
  data() {
    return {
      names: ["zsd", "zkz", "zhh"],
    };
  },
  methods: {
    changeNames() {
      this.names = ["hello", "vue"];
    },
  },
  // provide: {
  //   name: "bik",
  //   age: 19,
  //   // length: this.names.length,
  // },
  // 使用provide函数可以解决上述问题
  provide() {
    return {
      name: "bik",
      age: 20,
      // 使用computed动态计算值,注意这里需要使用箭头函数,不然this会指向别的地方
      length: computed(() => {
        return this.names.length;
      }),

      // 如果没有使用箭头函数,this会指向别的地方
      // length: computed(function () {
      //   return this.names.length;
      // }),
    };
  },
};
</script>
<style scoped></style>
