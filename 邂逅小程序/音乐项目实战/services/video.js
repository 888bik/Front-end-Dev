//发送获取推荐送视频的请求

import { myRequest } from "./index";

export function getTopMv(limit = 20, offset = 0) {
  return myRequest.request({
    url: "/top/mv",
    data: {
      limit,
      offset,
    },
  });
}
/**
 * 
 * @param {根据id获取播放视频的url} id
 */
export function getMvUrl(id) {
  return myRequest.request({
    url: "/mv/url",
    data: {
      id,
    },
  });
}

/**
 * 
 * @param {根据mvid获取视频详情} mvid 
 * @returns 
 */
export function getMvInfo(mvid) {
  return myRequest.request({
    url: "/mv/detail",
    data: {
      mvid,
    },
  });
}
