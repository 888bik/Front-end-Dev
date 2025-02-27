import { BASE_URL, TIMEOUT } from "./config";
import MyRequest from "./request";

// export const homeRequest = new MyRequest({
//   baseURL: BASE_URL,
//   timeout: TIMEOUT,
//   interceptors: {
//     requestSuccessFn: (config) => {
//       console.log("爱彼迎请求成功拦截");
//       return config;
//     },
//     requestFailureFn: (err) => {
//       console.log("爱彼迎请求失败拦截");
//       return err;
//     },
//     responseSuccessFn: (config) => {
//       console.log("爱彼迎响应成功的拦截");
//       return config;
//     },
//     responseFailureFn: (err) => {
//       console.log("爱彼迎响应失败的拦截");
//       return err;
//     }
//   },
// });
export const homeRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

export const entireRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});
