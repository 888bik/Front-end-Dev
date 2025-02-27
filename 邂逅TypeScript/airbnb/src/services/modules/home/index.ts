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
