import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello react",
    };
  }
  changeText() {
    this.setState(
      {
        message: "你好~",
      },
      () => {
        console.log("更新后:", this.state.message);//你好`
      }
    );
    console.log(this.state.message); //hello react
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        {message}
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }
}
