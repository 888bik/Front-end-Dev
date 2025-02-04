import { throttle } from "underscore";
import { getLyricInfo, getSongDetail } from "../../services/play";
import { parseLyric } from "../../utils/parse-lyric";
import playSongStore from "../../store/playSongStore";
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
    lyricInfos: {},
    currentLyricText: "",
    currentLyricIndex: 0,
    durationTime: 0,
    currentTime: 0,
    playModeName: "order",
    playModeIndex: 0,
    playSongIndex: 0,
    playSongList: [],

    tabTitles: ["歌曲", "歌词"],
    sliderValue: 0,
    isWaiting: false,
    isPlaying: true,
    isSliderChanging: false,
    isFirstPlay: true,

    scrollTop: 0,
    contentHeight: 500,
    currentPage: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id } = options;

    //播放歌曲
    this.setupPlaySongById(id);
    //获取歌曲列表
    playSongStore.onStates(
      ["playSongList", "playSongIndex"],
      this.handlePlaySongInfo
    );
    // this.fetchSongInfo();
    // this.fetchLyricInfo();
    this.setData({ contentHeight: app.globalData.contentHeight });

    // innerAudioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    // innerAudioContext.autoplay = true;
    // innerAudioContext.onTimeUpdate(() => {
    //   //更新歌曲进度
    //   if (!this.data.isSliderChanging && !this.data.isWaiting) {
    //     this.updateProgress();
    //   }
    //   //匹配歌曲歌词
    //   if (!this.data.lyricInfos.length) return;
    //   //最后一句歌词是匹配不到的,如果for循环没有匹配到就让index的默认值为最后一个
    //   let index = this.data.lyricInfos.length;
    //   for (let i = 0; i < this.data.lyricInfos.length; i++) {
    //     const element = this.data.lyricInfos[i];
    //     if (element.time > innerAudioContext.currentTime * 1000) {
    //       index = i - 1;
    //       break;
    //     }
    //   }
    //   //避免重复匹配
    //   if (index === this.data.currentLyricIndex) return;
    //   //获取当前的歌词
    //   const currentLyricText = this.data.lyricInfos[index].text;

    //   //更新歌词在页面的位置
    //   this.setData({
    //     currentLyricText,
    //     currentLyricIndex: index,
    //     scrollTop: index * 35,
    //   });
    // });

    // innerAudioContext.onSeeking(() => {
    //   innerAudioContext.pause();
    // });
    // innerAudioContext.onSeeked(() => {
    //   if (innerAudioContext.paused) {
    //     innerAudioContext.play();
    //   }
    //   this.setData({ isPlaying: true });
    // });
  },

  /**
   * 切换歌曲
   * @param {默认切换下一首} isNext
   */
  changeNewSong(isNext = true) {
    let index = this.data.playSongIndex;
    const length = this.data.playSongList.length;
    switch (this.data.playModeIndex) {
      case 1:
      case 0:
        index = isNext ? index + 1 : index - 1;
        if (index === length) index = 0;
        if (index === -1) index = length - 1;
        break;
      case 2:
        index = Math.floor(Math.random() * length);
        break;
    }
    const newSong = this.data.playSongList[index];
    //将数据回到初始状态
    this.setData({
      currentSong: {},
      sliderValue: 0,
      currentTime: 0,
      durationTime: 0,
    });
    this.setupPlaySongById(newSong.id);

    //保存最新的索引
    playSongStore.setState("playSongIndex", index);
  },
  /**
   * 监听数据的回调
   * @param {*} param0
   */
  handlePlaySongInfo({ playSongList, playSongIndex }) {
    if (playSongList) {
      this.setData({ playSongList });
    }
    if (playSongIndex !== undefined) {
      this.setData({ playSongIndex });
    }
  },
  /**
   * 播放歌曲
   */
  setupPlaySongById(id) {
    this.data.id = id;

    this.fetchLyricInfo();
    this.fetchSongInfo();

    innerAudioContext.stop();
    innerAudioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    innerAudioContext.autoplay = true;
    //判断歌曲是否第一次播放
    if (this.data.isFirstPlay) {
      this.data.isFirstPlay = false;
      innerAudioContext.onTimeUpdate(() => {
        //更新歌曲进度
        if (!this.data.isSliderChanging && !this.data.isWaiting) {
          this.updateProgress();
        }
        //匹配歌曲歌词
        if (!this.data.lyricInfos.length) return;
        //最后一句歌词是匹配不到的,如果for循环没有匹配到就让index的默认值为最后一个
        let index = this.data.lyricInfos.length - 1;
        for (let i = 0; i < this.data.lyricInfos.length; i++) {
          const element = this.data.lyricInfos[i];
          if (element.time > innerAudioContext.currentTime * 1000) {
            index = i - 1;
            break;
          }
        }
        //避免重复匹配
        if (index === this.data.currentLyricIndex) return;
        //获取当前的歌词
        const currentLyricText = this.data.lyricInfos[index].text;

        //更新歌词在页面的位置
        this.setData({
          currentLyricText,
          currentLyricIndex: index,
          scrollTop: index * 35,
        });
      });

      innerAudioContext.onSeeking(() => {
        innerAudioContext.pause();
      });
      innerAudioContext.onSeeked(() => {
        if (innerAudioContext.paused) {
          innerAudioContext.play();
        }
        this.setData({ isPlaying: true });
      });
      innerAudioContext.onEnded(() => {
        //如果是单曲循环,不需要切换下一首
        if (innerAudioContext.loop) return;
        this.changeNewSong();
      });
    }
  },
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
    const lyricInfos = parseLyric(res.lrc.lyric);
    this.setData({ lyricInfos });
  },
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

  /**
   * 模式切换
   * 0:顺序播放
   * 1:循环播放
   * 2:随机播放
   */
  onChangeMode() {
    let modeIndex = this.data.playModeIndex;
    modeIndex = modeIndex + 1;
    if (modeIndex === 3) modeIndex = 0;

    //判断是否是单曲循环
    if (modeIndex === 1) {
      innerAudioContext.loop = true;
    } else {
      innerAudioContext.loop = false;
    }
    
    this.setData({
      playModeIndex: modeIndex,
      playModeName: modeNames[modeIndex],
    });
  },

  /**
   * 监听暂停或者播放
   */
  onPlayOrPause() {
    if (!innerAudioContext.paused) {
      innerAudioContext.pause();
      this.setData({ isPlaying: false });
    } else {
      innerAudioContext.play();
      this.setData({ isPlaying: true });
    }
  },
  /**
   * 监听上一首的点击
   */
  onPrevTap() {
    this.changeNewSong(false);
  },
  /**
   * 监听下一首的点击
   */
  onNextTap() {
    this.changeNewSong();
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
