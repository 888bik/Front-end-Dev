import { myRequest } from "./index";

/**
 *获取轮播图数据
 * @param {*} type
 * @returns
 */
export function getBannerData(type = 0) {
  return myRequest.request({
    url: "/banner",
    data: {
      type,
    },
  });
}

/**
 * 获取推荐歌曲数据
 * @returns
 */
export function getRecommendData(id) {
  return myRequest.request({
    url: "/playlist/detail",
    data: {
      id,
    },
  });
}

/**
 * 获取歌单数据,默认获取全部
 * @param {*} cat 
 * @param {*} limit 
 * @param {*} offset 
 * @returns 
 */
export function getSongMenuList(cat = "全部", limit = 6, offset = 0) {
  return myRequest.request({
    url: "/top/playlist",
    data: {
      cat,
      limit,
      offset,
    },
  });
}