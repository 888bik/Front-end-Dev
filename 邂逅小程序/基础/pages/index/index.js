Page({
  /**
   * 页面的初始数据
   */
  data: {
    books:["码农翻身","Redis高手心法","漫画设计模式","图解http"],
    color:["red","skyblue","orange","pink"]
  },
  onclickbtn(){
    console.log("发生点击");

  },
  /**
   * 生命周期函数--监听页面加载
   * 获取共享的数据,App实例中的数据
   */
  onLoad(options) {
    console.log("onLoad");
    const app = getApp();
    const message = app.globalData.message;
    console.log(message);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("下拉刷新");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
