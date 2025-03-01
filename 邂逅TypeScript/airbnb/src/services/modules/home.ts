import { homeRequest } from "..";


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

/**
 *
 * @returns 获取折扣优惠房源数据
 */
export function getDiscountData() {
  return homeRequest.request({
    url: "/home/discount",
  });
}

/**
 *
 * @returns 获取推荐房源数据
 */
export function getRecommendData() {
  return homeRequest.request({
    url: "/home/hotrecommenddest",
  });
}
/**
 * 
 * @returns 获取plus房源数据
 */
export function getPlusData() {
  return homeRequest.request({
    url: "/home/plus",
  });
}
/**
 * 获取向往房源数据
 */
export function getLongForData() {
  return homeRequest.request({
    url:"/home/longfor"
  })
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
