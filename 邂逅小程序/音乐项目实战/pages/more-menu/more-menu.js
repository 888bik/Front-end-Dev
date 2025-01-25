import { getSongMenuList, getSongMenuTag } from "../../services/music";

// pages/more-menu/more-menu.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    songMenuList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchAllMenuList();
  },
  async fetchAllMenuList() {
    //获取不同的tag
    const res = await getSongMenuTag();
    const tags = res.tags;

    //根据不同的tag获取对应的歌单列表
    const allPromise = [];
    for (const tag of tags) {
      const promise = getSongMenuList(tag.name);
      allPromise.push(promise);
    }
    Promise.all(allPromise).then((res) => {
      this.setData({ songMenuList: res });
    });
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
