// components/my-cpn.js
Component({
  options:{
    styleIsolation:"isolated"
  },
  //接收外部的样式
  externalClasses:["info"],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBtnTap(){
      console.log("发生了点击");
      this.triggerEvent("my-cpn-click")
    }
  }
})