<template>
  <div>
    <button @click="sendData">发送数据</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendData() {
      this.$emit("update:data", 20);
    },
  },
  emits: {
    "update:data": function (value) {
      //验证传递的参数
      if (typeof value != "string") {
        console.warn("数据必须是字符串类型");
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped></style>
