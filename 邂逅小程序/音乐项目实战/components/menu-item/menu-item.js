// components/menu-item/menu-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData: {
      type: Object,
      value: {},
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
    onMenuItemTap() {
      const id = this.properties.itemData.id;
      
      wx.navigateTo({
        url: `/pages/more-music/more-music?type=menu&id=${id}`,
        success: (result) => {},
        fail: () => {},
        complete: () => {},
      });
    },
  },
});
