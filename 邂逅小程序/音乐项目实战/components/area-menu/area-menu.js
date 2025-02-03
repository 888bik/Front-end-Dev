// components/area-menu/area-menu.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menuList: {
      type: Array,
      value: [],
    },
    title: {
      type: String,
      value: "默认标题",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    screenWidth: 375,
  },
  lifetimes: {
    attached() {
      this.setData({ screenWidth: app.globalData.screenWidth });
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMenuMoreTap() {
      wx.navigateTo({
        url: "/pages/more-menu/more-menu",
        success: (result) => {},
        fail: () => {},
        complete: () => {},
      });
    },
  },
});
