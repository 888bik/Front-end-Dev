Page({
  data: {
    dailyForecast: [],
    updateTime: ''
  },

  onLoad() {
    this.get7DayWeather();
  },

  get7DayWeather() {
    wx.request({
      url: 'https://jk3p3y8253.re.qweatherapi.com/v7/weather/7d',
      data: { location: '101010100' },
      header: {
        'X-QW-Api-Key': '68dfa7c745534bd7a7e5235be1d11ff6'
      },
      success: res => {
        if (res.data.code === '200') {
          const daily = res.data.daily.map(item => ({
            fxDate: item.fxDate,
            textDay: item.textDay,
            textNight: item.textNight,
            tempMax: item.tempMax,
            tempMin: item.tempMin,
            windDirDay: item.windDirDay,
            windScaleDay: item.windScaleDay,
            iconDayUrl: `https://icons.qweather.com/assets/icons/${item.iconDay}.svg`,
            iconNightUrl: `https://icons.qweather.com/assets/icons/${item.iconNight}.svg`
          }));

          this.setData({
            dailyForecast: daily,
            updateTime: res.data.updateTime.replace('T', ' ')
          });
        } else {
          wx.showToast({ title: '天气获取失败', icon: 'none' });
        }
      },
      fail: () => {
        wx.showToast({ title: '接口请求失败', icon: 'none' });
      }
    });
  }
});
