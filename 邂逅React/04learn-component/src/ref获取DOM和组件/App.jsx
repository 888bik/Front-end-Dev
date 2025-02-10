import React, { Component, createRef, PureComponent } from "react";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {};
    this.titleRef = createRef();
    this.titleRef2 = null;
  }
  getNative() {
    //方式一:提前创建好ref对象, createRef(), 将创建出来的对象绑定到元素
    console.log(this.titleRef.current);
    //方式二:传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入
    console.log(this.titleRef2);
  }
  render() {
    return (
      <div>
        <h3 ref={this.titleRef}>你好世界</h3>
        <h4
          ref={(el) => {
            this.titleRef2 = el;
          }}
        >
          hello react
        </h4>
        <button onClick={(e) => this.getNative()}>获取Ref</button>
      </div>
    );
  }
}
