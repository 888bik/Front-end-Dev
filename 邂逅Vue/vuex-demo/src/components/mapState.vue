<template>
  <div>
    <h2>{{ counter }}</h2>
    <h3>{{ Name }}</h3>
    <h4>等级:{{ level }}</h4>
    <h5>{{ sCounter }}</h5>
  </div>
</template>

<script>
export default {
  computed: {
    storeCounter() {
      return this.$store.state.counter;
    },
    //使用mapState辅助函数获取状态
    //数组写法
    ...mapState(["name", "age", "level"]),
    //对象写法
    ...mapState({
      sCounter: (state) => {
        return state.counter;
      },
      sName: (state) => state.name,
    }),
  },
};
</script>

<script setup>
import { computed, toRefs } from "vue";
import { mapState, useStore } from "vuex";

const store = useStore();
//一步步完成
const { name, age } = mapState(["name", "age"]); //解构完name,age是一个函数
//如果直接调用的话,由于这里没有$store,所有运行会报错
// name();
// 所以可以对name进行一个绑定
const Name = computed(name.bind({ $store: store }));
const Age = computed(age.bind({ $store: store }));

// 第二种做法是直接对store.state进行解构
// 这种写法解构出来的状态是不具有响应的
// const { counter, level } = store.state;
const { counter, level } = toRefs(store.state);
</script>

<style lang="scss" scoped></style>
