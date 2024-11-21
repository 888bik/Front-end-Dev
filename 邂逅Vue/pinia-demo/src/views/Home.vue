<template>
  <div>
    <h1>{{ userStore.counter }}</h1>
    <h2>{{ userStore.age }}</h2>
    <h3>{{ name }}</h3>
    <h4>{{ height }}</h4>
    <button @click="changeHeight">修改</button>
    <button @click="changeInfo">一键修改</button>
    <button @click="reset">重置</button>
    <button @click="incrementBtnClick">增加</button>
  </div>
  <div>
    <!-- 直接使用 -->
    <h2>{{ userStore.doubleCountAddOne }}</h2>
    <h3>{{ userStore.doubleCount }}</h3>
  </div>
</template>

<script setup>
import { toRefs, useSSRContext } from "vue";
import useUser from "../stores/user";

const userStore = useUser();
const { name, height } = toRefs(userStore);

function incrementBtnClick() {
  userStore.increment().then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });
}
function changeHeight() {
  userStore.height = 1.98;
}
function reset() {
  userStore.$reset();
}
function changeInfo() {
  userStore.$patch({
    name: "zsd",
    age: 21,
  });
}
// function replace() {
//   userStore.$state = {
//     counter: 100,
//     level: 999,
//   };
//   console.log(userStore);
// }
</script>

<style lang="scss" scoped></style>
