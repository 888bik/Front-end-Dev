import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { MyRequestConfig } from "./type";

class MyRequest {
  instance: AxiosInstance;

  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config);
    //添加全局拦截器
    //请求拦截,可以针对每个请求拦截处理,比如添加token,并通常config
    this.instance.interceptors.request.use(
      (config) => {
        console.log("全局请求成功的拦截");
        return config;
      },
      (err) => {
        console.log("全局请求失败的拦截");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("全局响应成功的拦截");
        return res.data;
      },
      (err) => {
        console.log("全局响应失败的拦截");
        return err;
      }
    );

    //针对个别请求添加拦截
    if (config.interceptors) {
      this.instance.interceptors.request.use(config.interceptors.requestSuccessFn, config.interceptors.requestFailureFn);
      // this.instance.interceptors.response.use(config.interceptors.responseSuccessFn, config.interceptors.responseFailureFn);
    }
  }
  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
  get() {}
  post() {}
}
export default MyRequest;
