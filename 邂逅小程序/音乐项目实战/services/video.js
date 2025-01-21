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
