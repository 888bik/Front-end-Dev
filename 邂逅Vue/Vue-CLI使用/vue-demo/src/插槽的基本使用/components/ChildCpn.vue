<template>
  <div>
    <!-- <h2>{{ title }}</h2> -->
    <!-- 将message传递给插槽 -->
    <slot :message="message"></slot>

    <!-- 使用具名插槽并传递数据 -->
    <!-- <slot :title="headerTitle" name="header"></slot>
    <slot :footerInfo="footerData" name="footer"></slot> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // title: "hello vue",
      message: "来自子组件的消息",
      headerTitle: "我是头部",
      footerData: "我是页脚",
    };
  },
};
</script>

<style scoped></style>
