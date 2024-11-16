<template>
  <!-- <div>
    <h1>组件展示的content:{{ content }}</h1>
    <h2>组件展示的title:{{ title }}</h2>
    <h3>组件展示的name:{{ name }}</h3>
  </div> -->
  <!-- div如果没有接收参数,而父组件有传递参数的话,这里会自动添加其传递的参数 -->
  <!-- <div >
    我是根节点
  </div> -->

  
  <!--如果没有声明props,可以通过$attrs获取所有非props的attribute -->
  <!-- 需要将自动继承关掉 -->
  <div :class="$attrs.class" :name="$attrs.name">
    {{ $attrs.title }}
  </div>

  <!-- <div>
    我也是根节点
  </div> -->
</template>

<script>
export default {
  inheritAttrs: false,
  //用props接受父组件传递过来的数据
  //1.props数组语法
  //弊端:不能对类型进行验证,没有默认值
  // props: ["name", "title", "content"],

  //2.props对象语法(重要)
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //     default: "我是默认值name",
  //   },
  //   title: {
  //     type: String,
  //     default: "我是默认值title",
  //   },
  //   content: {
  //     type: String,
  //     default: "我是默认值content",
  //   },
  // },
  // 2.1对象类型的其他写法
  // props: {
  //   //基础类型的检查(null和undefined会通过任何类型验证)
  //   propA: String,
  //   // 多个可能的类型
  //   propB: [String, Number],
  //   //必填的字符串
  //   propC: {
  //     type: String,
  //     required: true,
  //   },
  //   //带有默认值的数字
  //   propD: {
  //     type: Number,
  //     default: 100,
  //   },
  //   //带有默认值的对象
  //   propE: {
  //     type: Object,
  //     //对象或数组默认值需要从一个工厂函数获取
  //     default() {
  //       return { message: "hello" };
  //     },
  //   },
  //   //自定义验证函数
  //   propF: {
  //     validator(value) {
  //     //这个值必须匹配下列字符串中的一个
  //       return ["success", "waring", "danger"].includes(value);
  //     },
  //   },
  //   propG: {
  //     type: Function,
  //     //与对象或数组默认值不同,这不是一个工厂函数,而是一个用作默认值的函数
  //     default() {
  //       return "Default function"
  //     }
  //   }
  // },
};
</script>

<style scoped></style>
