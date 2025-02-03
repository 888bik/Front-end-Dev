// app.js
App({
  globalData: {
    screenWidth: 375,
    screenHeight: 0,
    statusHeight: 20,
    contentHeight:500
  },
  onLaunch() {
    //获取设备的信息
    wx.getSystemInfo({
      success: (result) => {
        this.globalData.screenWidth = result.screenWidth;
        this.globalData.screenHeight = result.screenHeight;
        this.globalData.statusHeight = result.statusBarHeight;
        this.globalData.contentHeight = this.globalData.screenHeight - this.globalData.statusHeight - 44
      },
      fail: () => {},
      complete: () => {},
    });
  },
});
