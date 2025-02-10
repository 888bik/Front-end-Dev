import React, { PureComponent } from "react";
import { createPortal } from "react-dom";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>我是h2元素</h2>
        {createPortal(<h3>我是H3元素</h3>, document.querySelector("#bik"))}
      </div>
    );
  }
}
