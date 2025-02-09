import React, { Component } from "react";

export default class App extends Component {
  render() {
    const left = <button>按钮</button>;
    const center = <span>我是文本</span>;
    const right = <i>斜体文字</i>;
    return (
      <div>
        <TabBar leftSlot={left} centerSlot={center} rightSlot={right}></TabBar>
      </div>
    );
  }
}

class TabBar extends Component{
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;
    return (
      <div>
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    );
  }
}
