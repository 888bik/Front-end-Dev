import recommendStore from "../../store/recommendStore";

// pages/more-music/more-music.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: "ranking",
    songInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //确定获取数据的类型
    const { type } = options;
    this.setData({ type });
    // 根据不同的type获取数据
    if (type == "recommend") {
      recommendStore.onState("recommendInfos", (value) => {
        this.setData({ songInfo: value });
      });
    }
  },
});
