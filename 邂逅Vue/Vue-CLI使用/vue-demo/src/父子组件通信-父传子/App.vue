<template>
  <div>
    <!-- 用数组形式接受 -->
    <!-- <show-info name="bik" content="哈哈哈哈" title="组件间的通信"></show-info> -->
    <!-- 用对象语法接受 -->
    <!-- <show-info></show-info> -->
    <!-- <show-info
      name="zsd"
      content="呵呵呵呵"
      title="父组件传递给子组件"
    ></show-info> -->
  </div>
  <div>
    <!-- 定义attribute,但是子组件没有写对应的参数接受,子组件默认会自动添加 -->
    <show-info class="bik" name="zsd" title="哈哈哈"></show-info>
  </div>
</template>

<script>
import showInfo from "./components/showInfo.vue";
export default {

  components: {
    showInfo,
  },
};
</script>

<style scoped></style>
