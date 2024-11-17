<template>
  <div>
    <h2>HomeContent</h2>
    <h3>{{ name }}</h3>
    <h4>{{ age }}</h4>
    <h5>names的长度:{{ length }}</h5>
  </div>
</template>

<script>
export default {
  inject: ["name", "age","length"],
};
</script>

<style scoped></style>
