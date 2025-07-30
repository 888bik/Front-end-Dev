import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
class MyRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    //添加全局拦截器
    this.instance.interceptors.request.use(
      (config: any) => {
        console.log("全局请求成功拦截..");
        return config;
      },
      (error: any) => {
        console.log("全局请求失败拦截...");
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (res: any) => {
        console.log("全局响应成功拦截...");
        return res;
      },
      (error: any) => {
        console.log("全局响应失败拦截...");
        return error;
      }
    );
    //针对特定请求添加拦截器
  }
  get() {}
  post() {}
}

const req = new MyRequest({ baseURL: "https://baidu.com", timeout: 3000 });

export {};
