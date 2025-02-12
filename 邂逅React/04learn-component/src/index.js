import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./认识Redux/store";
import App from "./认识Redux/App";
// import App from "./认识Redux/02connect使用";
// import App from "./认识Redux/01基本使用";
// import App from "./过渡动画/App";
// import App from "./Portals的使用/App";
// import App from "./高阶组件/App";
// import App from "./高阶组件/01Props的增强";
// import App from "./受控组件和非受控组件/App";
// import App from "./ref获取DOM和组件/App";
// import App from "./setState原理/App";
// import App from "./非父子组件共享数据/App";
// import App from "./插槽实现/props实现插槽";
// import App from "./插槽实现/children实现插槽";
// import App from "./组件间的通信/App";
// import App from "./组件间的通信/03子传父-类组件";
// import App from "./组件间的通信/02父传子-函数组件";
// import { App } from './组件间的通信/01父传子-类组件';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
