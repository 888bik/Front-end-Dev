import React, { PureComponent } from "react";
import { store } from "./store";
import { changAgeAction, changeNameAction } from "./store/actionCreators";
export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
    };
  }
  componentDidMount() {
    //订阅数据的变化,同时可以返回一个取消订阅的函数
    store.subscribe(() => {
      this.setState({ name: store.getState().name, age: store.getState().age });
    });
  }
  changeText() {
    store.dispatch(changeNameAction("zsd"));
    store.dispatch(changAgeAction(20));
  }
  render() {
    const { name, age } = this.state;
    return (
      <div>
        名字:{name}年龄:{age}
        <button onClick={(e) => this.changeText()}>修改</button>
      </div>
    );
  }
}
