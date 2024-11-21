const counter = {
  namespaced:true,
  state: () => ({
    count: 200,
  }),
  getters: {
    addCount(state, getters, rootState) {
      return getters.addCountWithOne + 100;
    },
    addCountWithOne(state) {
      return state.count + 1;
    },
  },
  mutations: {
    sub(state) {
      state.count--;
    },
  },
};
export default counter;
