import { defineStore } from "pinia";

//defineStore的第一个参数为id
//返回的函数统一使用usexxx来命名
const useUser = defineStore("user", {
  state: () => ({
    name: "bik",
    age: 20,
    height: 1.88,
    counter: 99,
  }),
  getters: {
    //基本使用
    doubleCount(state) {
      return state.counter * 2;
    },
    //一个getters引用另外一个getter
    doubleCountAddOne() {
      //this是store实例
      return this.doubleCount + 1;
    },
    //也支持返回一个函数
  },
  actions: {
    increment() {
      return new Promise((resolve, reject) => {
        this.counter++;
        resolve("增加操作完成");
      });
    },
  },
});
export default useUser;
