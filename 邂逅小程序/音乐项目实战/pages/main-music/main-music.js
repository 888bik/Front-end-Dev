import {
  getBannerData,
  getRecommendOrRankingData,
  getSongMenuList,
} from "../../services/music";
import playSongStore from "../../store/playSongStore";
import rankingStore from "../../store/rankingStore";
import recommendStore from "../../store/recommendStore";
import querySelect from "../../utils/query-select";
import MyThrottle from "../../utils/throttle";
const querySelectThrottle = MyThrottle(querySelect, 100);
// pages/main-music/main-music.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    bannerHeight: 0,
    searchValue: "",
    //推荐歌曲信息
    recommendSongs: [],
    //热门歌单
    hotMenuList: [],
    // 推荐歌单
    recMenuList: [],
    // 巅峰榜数据
    rankingInfos: {},
    hasRankingData: false,
    // 当前正在播放的歌曲信息
    currentSong: {},
    isPlaying: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchBanners();
    this.fetchSongMenuList();
    // this.fetchRecommendSongs();
    //监听recommendInfo的变化,一旦发生变化执行回调,注意不能调用,而是传入一个回调函数
    recommendStore.onState("recommendInfos", this.handleRecommendSongs);
    // 发起action
    recommendStore.dispatch("fetchRecommendDataAction");
    rankingStore.dispatch("fetchRankingDataAction");
    //监听数据
    rankingStore.onState("newRanking", this.handleNewRanking);
    rankingStore.onState("originRanking", this.handleOriginRanking);
    rankingStore.onState("upRanking", this.handleUpRanking);
    playSongStore.onStates(["currentSong", "isPlaying"], this.handleSongInfo);
  },

  /**
   * 监听播放栏封面跳转详情
   */
  onPlayBarImgTap() {
    wx.navigateTo({
      url: "/pages/detail-song/detail-song",
    });
  },
  /**
   * 监听播放栏的暂停或者播放
   */
  onPlayOrPauseTap() {
    playSongStore.dispatch("changePlayStatus");
  },
  /**
   * 共享歌曲列表数据
   * @param {} event
   */
  onItemTap(event) {
    const index = event.currentTarget.dataset.index;
    playSongStore.setState("playSongList", this.data.recommendSongs);
    playSongStore.setState("playSongIndex", index);
  },
  /**
   * 获取轮播图
   */
  async fetchBanners() {
    const res = await getBannerData();
    this.setData({ banners: res.banners });
  },

  /**
   * 获取热门歌单
   */
  async fetchSongMenuList() {
    getSongMenuList().then((res) => {
      this.setData({ hotMenuList: res.playlists });
    });
    getSongMenuList("华语").then((res) => {
      this.setData({ recMenuList: res.playlists });
    });
  },

  /**
   * 获取当前正在播放的歌曲信息
   * @param {*} param0
   */
  handleSongInfo({ currentSong, isPlaying }) {
    if (currentSong) {
      this.setData({ currentSong });
    }
    if (isPlaying !== undefined) {
      this.setData({ isPlaying });
    }
  },
  /**
   * recommendStore获取推荐歌曲的回调
   * @param {*} value
   * @returns
   */
  handleRecommendSongs(value) {
    if (!value.tracks) return;
    this.setData({ recommendSongs: value.tracks.slice(0, 6) });
  },
  /**
   *  rankingStore中的newRanking发生变化时,回调此函数将newRanking的数据添加到rankingInfos
   * @param {*} value
   * @returns
   */
  handleNewRanking(value) {
    if (!value) return;
    this.setData({ hasRankingData: true });
    const newRankingInfo = { ...this.data.rankingInfos, newRanking: value };
    this.setData({ rankingInfos: newRankingInfo });
  },
  /**
   *  rankingStore中的originRanking发生变化时,回调此函数将originRanking的数据添加到rankingInfos
   * @param {*} value
   * @returns
   */
  handleOriginRanking(value) {
    if (!value) return;
    this.setData({ hasRankingData: true });
    const newRankingInfo = { ...this.data.rankingInfos, originRanking: value };
    this.setData({ rankingInfos: newRankingInfo });
  },
  /**
   *  rankingStore中的upRanking发生变化时,回调此函数将upRanking的数据添加到rankingInfos
   * @param {*} value
   * @returns
   */
  handleUpRanking(value) {
    if (!value) return;
    this.setData({ hasRankingData: true });
    const newRankingInfo = { ...this.data.rankingInfos, upRanking: value };
    this.setData({ rankingInfos: newRankingInfo });
  },
  /**
   * 监听图片加载完毕之后,获取轮播图图片的高度
   */
  onBannerImageLoad() {
    querySelectThrottle(".banner-image")
      .then((result) => {
        this.setData({ bannerHeight: result[0].height });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  onRecommendTap() {
    wx.navigateTo({
      url: "/pages/more-music/more-music?type=recommend",
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    });
  },
  onUnload() {
    recommendStore.offState("recommendInfos", this.handleRecommendSongs);
    rankingStore.offState("newRanking", this.handleNewRanking);
    rankingStore.offState("originRanking", this.handleOriginRanking);
    rankingStore.offState("upRanking", this.handleUpRanking);
  },
});
