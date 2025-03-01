// import { entireRequest } from "../..";

import { entireRequest } from "..";

// entireRequest
//   .request({
//     url: "/entire/list",
//     params: {
//       offset: 0,
//       size: 20,
//     },
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
export function getEntireRoomList(offset = 0, size = 20) {
  return entireRequest.request({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
