<template>
  <div>
    <!-- 当前计数:{{ counter }} -->
    <!-- 父组件通过@事件名="事件处理方法"监听子组件触发的事件 -->
    <!-- <counter-operation @add="addOne" @sub="subOne"></counter-operation> -->
    <!-- 父组件可以通过接收子组件emit的参数 -->
    <!-- <counter-operation @childEvent="handleChildEvent"></counter-operation> -->
  </div>
  <div>
    <show-info @update:data="receiveData"></show-info>
  </div>
</template>

<script>
import CounterOperation from "./components/CounterOperation.vue";
import showInfo from "./components/showInfo.vue";
export default {
  components: {
    CounterOperation,
    showInfo,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    //   addOne() {
    //     this.counter++;
    //   },
    //   subOne(message) {
    //     this.counter--;
    //   },
    //接受子组件传递的参数
    // handleChildEvent(msg, age) {
    //   console.log(msg);
    //   console.log(age);
    // },
    receiveData(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped></style>
