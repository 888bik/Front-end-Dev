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
