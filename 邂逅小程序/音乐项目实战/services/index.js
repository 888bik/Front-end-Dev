import { baseUrl } from "./config";
class MyRequest {
  //构造器初始化baseUrl
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  //封装网络请求API
  request(options) {
    const { url } = options;
    //使用Promise返回结果
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        url: this.baseUrl + url,
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  }
  // get(options){
  //   return this.request({...options,method:"get"})
  // }
}
export const myRequest = new MyRequest(baseUrl);
