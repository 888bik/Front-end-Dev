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
    hasMore: true,
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
    // 将原先的视频列表展开,然后将最新获取的视频也展开追加
    const newVideoList = [...this.data.videoList, ...res.data];
    //因为要重新渲染界面,所以使用setData
    this.setData({ videoList: newVideoList });
    // 一开始列表长度为0,offset为0,获取到视频之后,如果重新发起请求,会讲offset改为视频个数
    this.data.hasMore = res.hasMore;
    this.data.offset = this.data.videoList.length;
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
  onPullDownRefresh() {
    //下拉刷新重新发起请求
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (!this.data.hasMore) return;
    this.fetchTopMv();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
