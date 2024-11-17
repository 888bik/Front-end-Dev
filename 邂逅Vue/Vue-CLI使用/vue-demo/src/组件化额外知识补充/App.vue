<template>
  <!-- <div class="box">
    <input type="text" ref="MyInput" />
    <button @click="focusInput">聚焦输入框</button>
  </div> -->
  <!-- <div>
    <child-cpn ref="child"> </child-cpn>
  </div>
  <div>
    <button @click="callChildMethod">调用子组件方法</button>
  </div> -->
  <div>
    <button @click="currentComponent = 'ComponentA'">show componentA</button>
    <button @click="currentComponent = 'ComponentB'">show componentB</button>
    <!-- 动态加载组件 -->
    <!-- <component :is="currentComponent"></component> -->
    <component
      :is="currentComponent"
      name="bik"
      age="20"
    ></component>
  </div>
</template>

<script>
import ChildCpn from "./components/ChildCpn.vue";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
export default {
  data() {
    return {
      message: "hello vue",
      currentComponent: "ComponentA", //默认加载ComponentA
      // parentClick: {
      //   onClick: this.handClick, //传递的函数
      // },
    };
  },
  methods: {
    handClick() {
      console.log("父组件发生点击");
    },
    focusInput() {
      console.log(this.$refs.MyInput); //<input type="text">
      // 通过 $refs 访问 DOM 元素并调用 focus 方法
      this.$refs.MyInput.focus();
    },
    callChildMethod() {
      this.$refs.child.childMethod();
      this.$refs.child.childFunction();
    },
  },
  components: {
    ChildCpn,
    ComponentA,
    ComponentB,
  },
};
</script>

<style scoped></style>
