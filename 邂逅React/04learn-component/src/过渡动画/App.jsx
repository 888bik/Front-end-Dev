import React, { Component, createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello react",
      isShow: true,
    };
    this.titleRef = createRef("");
  }
  changeText() {
    this.setState({
      message: "你好,BIK",
    });
  }
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <CSSTransition
          nodeRef={this.titleRef}
          in={isShow}
          unmountOnExit={true}
          appear
          classNames="bik"
          timeout={2000}
          onEnter={(e) => console.log("开始进入动画")}
        >
          <h2 ref={this.titleRef}>{this.state.message} </h2>
        </CSSTransition>
        <button
          onClick={() => {
            this.setState({ isShow: !isShow });
            this.changeText();
          }}
        >
          切换
        </button>
      </div>
    );
  }
}
