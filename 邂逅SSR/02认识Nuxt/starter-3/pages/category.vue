<template>
  <div>
    <h2>category Page</h2>
  </div>
</template>

<script setup lang="ts">
const ins = getCurrentInstance();
onMounted(() => {
  ins?.proxy?.$alert("hello bik666");
});
</script>

<style scoped></style>
