import { homeRequest } from "../..";


homeRequest
  .request({
    url: "/home/discount",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
