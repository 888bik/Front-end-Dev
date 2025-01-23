import { getMvInfo, getMvUrl } from "../../services/video";

// pages/detail-video/detail-video.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mvUrl: "",
    mvInfo: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id } = options;
    //根据id获取对应的视频url地址
    this.fetchMvUrl(id);
    this.fetchMvInfo(id);
  },
  async fetchMvUrl(id) {
    const res = await getMvUrl(id);
    this.setData({ mvUrl: res.data.url });
  },
  async fetchMvInfo(id) {
    const res = await getMvInfo(id);
    this.setData({mvInfo:res.data})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
