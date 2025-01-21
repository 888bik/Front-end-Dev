import { getTopMv } from "../../services/video";
// pages/main-video/main-video.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    offset: 0,
    limit: 20,
    videoList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchTopMv();
  },
  //发送网络请求
  async fetchTopMv() {
    const res = await getTopMv(this.data.limit, this.data.offset);
    //因为要重新渲染界面,所以使用setData
    this.setData({ videoList: res.data });
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
