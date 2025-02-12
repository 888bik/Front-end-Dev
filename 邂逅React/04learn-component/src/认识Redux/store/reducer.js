import { ADD_NUMBER, CHANGE_BANNER, SUB_NUMBER } from "./constants";

//初始化数据
const initialStore = {
  counter: 100,
  banner: [],
};
//reducer是一个纯函数,将state和action结合
//两个参数:
//参数一:store中目前保存的state
//参数二:本次需要更新的action(dispatch传入的action)
//返回值:它的返回值会作为store之后存储的state
function reducer(state = initialStore, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNER:
      return { ...state, banner: action.payload };
    default:
      return state;
  }
}
export default reducer;
