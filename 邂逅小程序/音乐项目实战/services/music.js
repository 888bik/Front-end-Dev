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
 * 新歌 id=3779629
  原创 id=2884035
  飙升 id=19723756
  热歌 id=3778678
 * @returns
 */
export function getRecommendOrRankingData(id) {
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
/**
 * 获取歌单的标签
 * @returns
 */
export function getSongMenuTag() {
  return myRequest.request({
    url: "/playlist/hot",
  });
}

export function getPlaylistDetail(id) {
  return myRequest.request({
    url: "/playlist/detail",
    data: {
      id,
    },
  });
}
