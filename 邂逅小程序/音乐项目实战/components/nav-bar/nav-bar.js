// components/nav-bar/nav-bar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {},
  options: {
    multipleSlots: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    statusHeight: 20,
  },
  lifetimes: {
    attached() {
      this.setData({ statusHeight: app.globalData.statusHeight });
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBackTap() {
      wx.navigateBack({
        delta: 1,
      });
    },
  },
});
