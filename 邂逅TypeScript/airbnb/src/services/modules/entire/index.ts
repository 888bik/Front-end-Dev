import { entireRequest } from "../..";

entireRequest
  .request({
    url: "/entire/list",
    params: {
      offset: 0,
      size: 20,
    },
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
