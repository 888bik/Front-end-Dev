import {
  getBannerData,
  getRecommendData,
  getSongMenuList,
} from "../../services/music";
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
  },
  /**
   * 获取轮播图
   */
  async fetchBanners() {
    const res = await getBannerData();
    this.setData({ banners: res.banners });
  },
  /**
   * 获取推荐歌曲
   */
  // async fetchRecommendSongs() {
  //   const res = await getRecommendData();
  //   this.setData({ recommendSongs: res.playlists });
  // },

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
   * recommendStore获取推荐歌曲的回调
   * @param {*} value
   * @returns
   */
  handleRecommendSongs(value) {
    if (!value.tracks) return;
    this.setData({ recommendSongs: value.tracks.slice(0, 6) });
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
});
