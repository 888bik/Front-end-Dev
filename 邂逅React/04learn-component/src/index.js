import React from "react";
import ReactDOM from "react-dom/client";
import App from "./非父子组件共享数据/App";
// import App from "./插槽实现/props实现插槽";
// import App from "./插槽实现/children实现插槽";
// import App from "./组件间的通信/App";
// import App from "./组件间的通信/03子传父-类组件";
// import App from "./组件间的通信/02父传子-函数组件";
// import { App } from './组件间的通信/01父传子-类组件';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
