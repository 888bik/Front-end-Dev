<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <h3>{{ storeCounter }}</h3>
    <h3>{{ counter }}</h3>
    <h2>信息:{{ name }}-{{ age }}</h2>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  computed: {
    storeCounter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<script setup>
import { toRefs } from "vue";
import { mapState, useStore } from "vuex";

const store = useStore();
const { counter } = toRefs(store.state);
const { name, age } = toRefs(store.state);


function add() {
  //虽然可以在这里直接操作counter,但是规范要求不要直接对store.state中的值进行修改
  // store.state.counter++;
  store.commit("add");
}
</script>

<style lang="scss" scoped></style>
