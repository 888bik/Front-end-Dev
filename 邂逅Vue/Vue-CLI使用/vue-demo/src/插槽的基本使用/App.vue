<template>
  <!-- <show-message>
    <h1>我要进来了哦</h1>
  </show-message> -->
  <nav-bar>
    <!-- 动态插槽名 -->
    <!-- <template v-slot:[name]>
      <button>我是左边的按钮</button>
    </template> -->
    <!-- 具名插槽缩写 -->
    <!-- <template #center>
      <h2>我是中间的内容</h2>
    </template>
    <template v-slot:right> -->
      <!-- <span>我是span元素</span>
    </template> -->
  </nav-bar>
  <child-cpn>
    <!-- 使用作用域插槽,获取子组件传递的数据 -->
    <!-- <template v-slot:default="slotProps">
      <h2>{{ slotProps.message }}</h2>

    </template> -->
    <!-- 简写1 -->
    <!-- <template v-slot="slotProps">
      <h2>{{ slotProps.message }}</h2>

    </template> -->
    


    <!-- 使用具名接收数据 -->
    <!-- <template v-slot:header="slotProps" >
      <span>{{ slotProps.title }}</span>
    </template>
    <template v-slot:footer="slotProps">
      <h2>{{ slotProps.footerInfo }}</h2>
    </template> -->
  </child-cpn>

  <child-cpn :message="message" v-slot="slotProps">
    <span>{{ slotProps.message }}</span>
  </child-cpn>
</template>

<script>
import showMessage from "./components/showMessage.vue";
import NavBar from "./components/NavBar.vue";
import ChildCpn from "./components/ChildCpn.vue";
export default {
  components: {
    showMessage,
    NavBar,
    ChildCpn,
  },
  data() {
    return {
      name: "left",
      // title:"hello bik"
    };
  },
};
</script>

<style scoped></style>
