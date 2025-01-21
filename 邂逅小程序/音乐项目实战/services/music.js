import { myRequest } from "./index";

/**
 * 
 * @param {获取轮播图数据} type 
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
