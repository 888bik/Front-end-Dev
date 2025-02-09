import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <button>按钮</button>
          <span>文本</span>
          <i>斜体文字</i>
        </NavBar>
      </div>
    );
  }
}
class NavBar extends Component {
  render() {
    return (
      <div>
        <div>{this.props.children[0]}</div>
        <div>{this.props.children[1]}</div>
        <div>{this.props.children[2]}</div>
      </div>
    );
  }
}
