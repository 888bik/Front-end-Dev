import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

createApp(App).mount("#app");
//发送网络请求
axios
  .request({
    url: "http://123.207.32.32:8000/home/multidata",
    method: "get",
  })
  .then((res) => {
    console.log("res:", res.data);
  });

//发送get请求
axios
  .get("http://43.138.171.211:58080/user/login?username=bik&password=bik")
  .then((res) => {
    console.log("res:", res);
  });
axios
  .get("http://43.138.171.211:58080/user/login", {
    params: {
      username: "bik",
      password: "bik",
    },
  })
  .then((res) => {
    console.log(res);
  });
//axios发送多个请求
axios
  .all([
    axios.get("http://123.207.32.32:8000"),
    axios.get("http://43.138.171.211:58080/user/login"),
  ])
  .then((res) => {
    console.log(res);
  });

//创建axios实例
const instance = axios.create({
  baseURL: "http://43.138.171.211:58080",
});
instance
  .get("/user/login", {
    username: "bik",
    password: "bik",
  })
  .then((res) => {
    console.log(res);
  });

const baseUrl = "http://43.138.171.211:58080";

//给axios实例配置公共的基础配置
axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 10000;
axios.defaults.headers = {};

//请求拦截
axios.interceptors.request.use(
  (config) => {
    console.log("请求成功的拦截");
    //1.开始loading的动画
    //2.对原来的配置进行一些修改
    // header/认证登录/请求参数进行某些转化
    return config;
  },
  (err) => {
    console.log("请求失败的拦截");
    return err;
  }
);

//响应拦截
axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截");
    //1.结束loading的动画
    //2.对数据进行转化再返回数据
    return res;
  },
  (err) => {
    console.log("响应失败的拦截:", err);
    return err;
  }
);
