import { createStore } from "vuex";

const store = createStore({
  // state: function () {
  //   return {
  //     name: "bik",
  //     age: 19,
  //     counter: 99,
  //   };
  // },
  state: () => ({
    age: 19,
    name: "bik",
    counter: 99,
    level: 999,
    books: [
      { id: 1, bookName: "Redis高手心法", price: 99 },
      { id: 2, bookName: "码农翻身", price: 88 },
      { id: 3, bookName: "图解HTTP", price: 77 },
    ],
  }),
  getters: {
    //基本使用
    doubleCounter(state) {
      return state.counter * 2;
    },
    totalPrice(state) {
      return state.books.reduce((preValue, item) => {
        // console.log(preValue);
        return preValue + item.price;
      }, 0);
    },
    //在该getters属性中,获取其他的getters
    message(state, getters) {
      return `name:${state.books[1].bookName} totalPrice:${getters.totalPrice}`;
    },
    //getters是可以返回一个函数的,调用这个函数可以传入函数
    getBookById(state) {
      return function (id) {
        return state.books.find((item) => item.id == id);
      };
    },
  },
  mutations: {
    add(state) {
      state.counter++;
    },
    sub(state) {
      state.counter--;
    },
    changeInfo(state, playLoad) {
      state.name = playLoad;
    },
  },
});

export default store;
