import { homeRequest } from "../..";

/**
 *
 * @returns 获取首页高性价比房源数据
 */
export function getHomeGoodPriceData() {
  return homeRequest.request({
    url: "/home/goodprice",
  });
}

/**
 * 
 * @returns 获取首页高分房源数据
 */
export function getHomeHighScoreData() {
  return homeRequest.request({
    url: "/home/highscore",
  });
}

// homeRequest
//   .request({
//     url: "/home/discount",
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
