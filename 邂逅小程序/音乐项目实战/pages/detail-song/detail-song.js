import { throttle } from "underscore";
import playSongStore, { innerAudioContext } from "../../store/playSongStore";
const app = getApp();

const modeNames = ["order", "repeat", "random"];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: -1,
    currentSong: {},
    lyricInfos: [],
    currentLyricText: "",
    currentLyricIndex: 0,
    durationTime: 0,
    currentTime: 0,
    playModeName: "order",
    playModeIndex: 0,
    playSongIndex: 0,
    playSongList: [],

    isFirstPlay: true,
    isPlaying: true,

    sliderValue: 0,
    isWaiting: false,
    isSliderChanging: false,
    tabTitles: ["歌曲", "歌词"],
    scrollTop: 0,
    contentHeight: 500,
    currentPage: 0,

    stateKeys: [
      "id",
      "currentSong",
      "durationTime",
      "currentTime",
      "lyricInfos",
      "currentLyricText",
      "currentLyricIndex",
      "isPlaying",
      "playModeIndex",
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id } = options;

    //播放歌曲,这里如果是从首页点击进来没有传递id的时候不需要播放
    if (id) {
      playSongStore.dispatch("playMusicAction", id);
    }
    //获取歌曲列表
    playSongStore.onStates(
      ["playSongList", "playSongIndex"],
      this.handleAllPlaySongsInfo
    );
    //获取歌曲数据
    playSongStore.onStates(this.data.stateKeys, this.handlePlayerInfos);

    this.setData({ contentHeight: app.globalData.contentHeight });
  },

  /**
   * 获取当前播放歌曲的数据
   * @param {} param0
   */
  handlePlayerInfos({
    id,
    currentSong,
    durationTime,
    currentTime,
    lyricInfos,
    currentLyricText,
    currentLyricIndex,
    isPlaying,
    playModeIndex,
  }) {
    if (id !== undefined) {
      this.setData({ id });
    }
    if (currentSong) {
      this.setData({ currentSong });
    }
    if (durationTime !== undefined) {
      this.setData({ durationTime });
    }
    if (currentTime !== undefined) {
      // 根据当前时间改变进度
      this.updateProgress(currentTime);
    }
    if (lyricInfos) {
      this.setData({ lyricInfos });
    }
    if (currentLyricText) {
      this.setData({ currentLyricText });
    }
    if (currentLyricIndex !== undefined) {
      // 修改lyricScrollTop
      this.setData({
        currentLyricIndex,
        scrollTop: currentLyricIndex * 35,
      });
    }
    if (isPlaying !== undefined) {
      this.setData({ isPlaying });
    }
    if (playModeIndex !== undefined) {
      this.setData({ playModeName: modeNames[playModeIndex] });
    }
  },
  /**
   * 监听点击歌曲列表数据的回调
   * @param {*} param0
   */
  handleAllPlaySongsInfo({ playSongList, playSongIndex }) {
    if (playSongList) {
      this.setData({ playSongList });
    }
    if (playSongIndex !== undefined) {
      this.setData({ playSongIndex });
    }
  },
  /**
   * 更新滑块进度
   */
  updateProgress: throttle(
    function (currentTime) {
      if (this.data.isSliderChanging) return;
      const sliderValue = (currentTime / this.data.durationTime) * 100;
      this.setData({ currentTime, sliderValue });
    },
    800,
    {
      leading: false,
      trailing: false,
    }
  ),
  /**
   * 监听滑块滑动
   * 防抖处理:在拖动滑块的过程中,由于currentTime时间不断变化会导致页面不断刷新,从而导致页面卡顿
   */
  onSliderChanging: throttle(function (event) {
    const value = event.detail.value;
    const currentTime = (value / 100) * this.data.durationTime;

    this.setData({ currentTime });

    this.data.isSliderChanging = true;
  }, 150),
  /**
   * 监听滑块点击
   */
  onSliderChange(event) {
    this.data.isWaiting = true;
    setTimeout(() => {
      this.data.isWaiting = false;
    }, 1000);
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

  /**
   * 模式切换
   * 0:顺序播放
   * 1:循环播放
   * 2:随机播放
   */
  onChangeMode() {
    playSongStore.dispatch("changePlayMode");
  },

  /**
   * 监听暂停或者播放
   */
  onPlayOrPause() {
    playSongStore.dispatch("changePlayStatus");
  },
  /**
   * 监听上一首的点击
   */
  onPrevTap() {
    playSongStore.dispatch("changeNewSongAction", false);
  },
  /**
   * 监听下一首的点击
   */
  onNextTap() {
    playSongStore.dispatch("changeNewSongAction", true);
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
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    playSongStore.offStates(
      ["playSongList", "playSongIndex"],
      this.handleAllPlaySongsInfo
    );
    // playSongStore.offStates(this.data.stateKeys, this.handlePlayerInfos);
  },

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
