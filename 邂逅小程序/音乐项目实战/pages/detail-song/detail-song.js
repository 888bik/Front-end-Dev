import { getLyricInfo, getSongDetail } from "../../services/play";
const app = getApp();
// 创建播放器
const innerAudioContext = wx.createInnerAudioContext();
// const innerAudioContext = wx.createInnerAudioContext({
//   useWebAudioImplement: false, // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
// });
const modeNames = ["order", "repeat", "random"];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: -1,
    currentSong: {},
    lyricInfo: {},
    durationTime: 0,
    currentTime: 0,

    tabTitles: ["歌曲", "歌词"],
    sliderValue: 0,
    isWaiting: false,
    isPlaying: true,
    isSliderChanging: false,

    contentHeight: 500,
    currentPage: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id } = options;
    this.data.id = id;
    this.setData({ contentHeight: app.globalData.contentHeight });

    this.fetchSongInfo();
    this.fetchLyricInfo();
    innerAudioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    innerAudioContext.autoplay = true;
    innerAudioContext.onTimeUpdate(() => {
      if (!this.data.isSliderChanging && !this.data.isWaiting) {
        this.updateProgress();
      }
    });
    innerAudioContext.onSeeking(() => {
      // innerAudioContext.pause();
    });
    innerAudioContext.onSeeked(() => {
      if (innerAudioContext.paused) {
        innerAudioContext.play();
      }
      this.setData({ isPlaying: true });
    });
  },
  /**
   * 播放歌曲
   */
  setupPlaySong(id) {},
  /**
   * 更新滑块进度
   */
  updateProgress() {
    const sliderValue = (this.data.currentTime / this.data.durationTime) * 100;
    this.setData({
      currentTime: innerAudioContext.currentTime * 1000,
      sliderValue,
    });
  },
  /**
   * 获取歌曲详情
   */
  async fetchSongInfo() {
    const res = await getSongDetail(this.data.id);
    this.setData({ currentSong: res.songs[0], durationTime: res.songs[0].dt });
  },
  /**
   * 获取歌曲的歌词
   */
  async fetchLyricInfo() {
    const res = await getLyricInfo(this.data.id);
    this.setData({ lyricInfo: res.lrc.lyric });
  },
  /**
   * 监听滑块滑动
   */
  onSliderChanging(event) {
    const value = event.detail.value;
    const currentTime = (value / 100) * this.data.durationTime;

    this.setData({ currentTime });

    this.data.isSliderChanging = true;
  },
  /**
   * 监听滑块点击
   */
  onSliderChange(event) {
    this.data.isWaiting = true;
    setTimeout(() => {
      this.data.isWaiting = false;
    }, 100);
    //获取点击滑块位置对应的 value
    const value = event.detail.value;
    //计算出要播放的位置时间
    const currentTime = (value / 100) * this.data.durationTime;
    //设置播放器
    innerAudioContext.seek(currentTime / 1000);
    //如果处于暂停状态点击滑块继续播放
    if (innerAudioContext.paused) {
      innerAudioContext.play();
    }
    this.setData({ currentTime, sliderValue: value, isSliderChanging: false });
  },
  onChangeMode() {
    console.log("模式切换");
  },
  onPrevTap() {
    console.log("上一首");
  },
  onPlayOrPause() {
    if (!innerAudioContext.paused) {
      innerAudioContext.pause();
      this.setData({ isPlaying: false });
    } else {
      innerAudioContext.play();
      this.setData({ isPlaying: true });
    }
  },
  onNextTap() {
    console.log("下一首");
  },
  showListTap() {
    console.log("歌单");
  },
  /**
   * 监听导航栏标题点击
   *
   */
  onNavTabItemTap(event) {
    const currentPage = event.currentTarget.dataset.index;
    this.setData({ currentPage });
  },
  /**
   * 监听轮播图滚动
   */
  onSwiperChange(event) {
    const currentPage = event.detail.current;
    this.setData({ currentPage });
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
