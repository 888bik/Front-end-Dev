import { getBannerData } from "../../services/music";
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchBanners();
  },
  /**
   * 获取轮播图
   */
  async fetchBanners() {
    const res = await getBannerData();
    this.setData({ banners: res.banners });
  },
  /**
   * 监听图片加载完毕之后,获取图片的高度
   */
  onBannerImageLoad() {
    querySelectThrottle(".banner-image")
      .then((result) => {
        console.log(result);
        this.setData({ bannerHeight: result[0].height });
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
