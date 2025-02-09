import React, { Component } from "react";
import ThemeContext from "./context/ThemeContext";
import UserContext from "./context/UserContext";

export default class HomeBanner extends Component {
  render() {
    //4.获取数据并且使用
    console.log(this.context);
    return (
      <div>
        HomeBanner:
        {this.context.color}
        <UserContext.Consumer>
          {(value) => {
            return <h3>{value.age}</h3>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}
//3.设置组件的contextType为某一个Context
HomeBanner.contextType = ThemeContext;
