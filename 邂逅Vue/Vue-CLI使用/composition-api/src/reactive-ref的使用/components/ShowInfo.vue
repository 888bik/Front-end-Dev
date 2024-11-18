<template>
  <div>
    <button @click="add">+</button>
    <span>年龄:{{ info.age }}</span>
    <button @click="sub">-</button>

    <h2>{{ message }}</h2>
    <button @click="changeMessage">修改</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    //正常定义的变量是不具有响应式的
    // let counter = 0;

    //用reactive来定义一些复杂的类型
    let info = reactive({
      age: 0,
      name: "bik",
    });
    //解构出来属性就不是响应式的了
    //这时候需要借助toRefs函数
    let { age, name } = toRefs(info);
    function add() {
      // info.age++;
      age.value++;
    }
    function sub() {
      // info.age--;
      age.value--;
    }

    // 也可以用ref定义响应式的数据,可以是复杂类型,也可以是简单的类型
    let message = ref("hello vue");
    function changeMessage() {
      // message = "hello bik"
      message.value = "hello bik";
    }

    return {
      info,
      add,
      sub,
      changeMessage,
      message,
    };
  },
};
</script>

<style lang="scss" scoped></style>
