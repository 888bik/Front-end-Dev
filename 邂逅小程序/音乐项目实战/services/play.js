import { myRequest } from "./index";

export function getSongDetail(ids) {
  return myRequest.request({
    url: "/song/detail",
    data: {
      ids
    }
  })
}
export function getLyricInfo(id) {
  return myRequest.request({
    url:`/lyric?id=${id}`
  })
}