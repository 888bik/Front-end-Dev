// components/area-header/area-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "默认标题",
    },
    hasMore: {
      type: Boolean,
      value: true,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onMoreTap() {
      wx.navigateTo({
        url: "/pages/more-music/more-music?type=recommend",
        success: (result) => {},
        fail: () => {},
        complete: () => {},
      });
      this.triggerEvent("moreTap");
    },
  },
});
