import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //将回调函数作为参数传递给子组件
  handleData = (count) => {
    this.addCount(count);
  };
  addCount(count) {
    let newCount = this.state.count + count;
    this.setState({
      count: newCount,
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <Children onData={(count) => this.handleData(count)} />
      </div>
    );
  }
}
class Children extends Component {
  constructor(props) {
    super(props);
  }
  changeCount = (count) => {
    this.props.onData(count);
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.changeCount(1);
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
