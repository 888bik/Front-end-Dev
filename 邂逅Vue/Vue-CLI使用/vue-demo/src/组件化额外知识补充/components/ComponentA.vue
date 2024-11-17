<template>
  <div>
    <h2>我是ComponentA</h2>
    <h3>{{ name }}</h3>
    <h4>{{ age }}</h4>
    <!-- <button @click="onClick">按钮</button> -->
  </div>
</template>

<script>
export default {
  // props:["name","age","parentClick"]
  props: {
    name: {
      type: String,
    },
    age: {
      type: String,
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick")
    }
  }
};
</script>

<style scoped></style>
