<template>
  <div>
    <show-info v-model="message"></show-info>
    <!-- v-model底层的实现是下面这种写法 -->
    <!-- 名称是固定的 -->
    <show-info
      :modelValue="message"
      @update:modelValue="message = $event"
    ></show-info>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import showInfo from "./components/showInfo.vue";
export default {
  components: {
    showInfo,
  },
  data() {
    return {
      message: "hello vue",
    };
  },
  methods: {
    //更新值
    // update(value) {
    //   this.message = value;
    // },
  },
};
</script>

<style scoped></style>
