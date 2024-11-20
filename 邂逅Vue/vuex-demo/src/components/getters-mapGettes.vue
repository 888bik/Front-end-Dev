<template>
  <div>
    <!-- <h2>{{ $store.getters.doubleCounter }}</h2>
    <h2>{{ $store.getters.getBookById(1) }}</h2>
    <h2>{{ $store.getters.getBookById(2) }}</h2>
    <h3>总价:{{ $store.getters.totalPrice }}</h3>
    <h4>{{ $store.getters.message }}</h4> -->
  </div>
  <div>
    <!-- <h2>{{ message }}</h2>
    <h3>{{ totalPrice }}</h3>
    <h4>{{ getBookById(2) }}</h4> -->
  </div>
  <div>
    <!-- <h2>{{ finalPrice }}</h2>
    <h4>{{ getBook(1) }}</h4> -->
  </div>
  <div>
    <h2>{{ message }}</h2>
    <h3>{{ totalPrice }}</h3>
    <h4>{{ getBookById(1) }}</h4>
  </div>
</template>

<script>
export default {
  computed: {
    //数组写法
    // ...mapGetters(["getBookById", "message", "totalPrice"]),
    //对象写法
    // ...mapGetters({
    //   finalPrice: "totalPrice",
    //   getBook: "getBookById",
    // }),
  },
};
</script>
<script setup>
import { computed, toRefs } from "vue";
import { mapGetters, useStore } from "vuex";

const store = useStore();
//1.直接使用mapGetters
const { message: messageFn } = mapGetters(["message"]);
// const message = computed(messageFn.bind({ $store: store }));

//2.直接解构,并且包裹成ref
const { totalPrice } = toRefs(store.getters);

//3.针对某一个getters属性使用computed
const getBookById = computed(() => {
  return store.getters.getBookById;
});
const message = computed(() => store.getters.message);
console.log(message);
console.log(getBookById);
</script>

<style lang="scss" scoped></style>
