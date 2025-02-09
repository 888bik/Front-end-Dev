import React, { Component } from "react";
import ThemeContext from "./context/ThemeContext";
import Home from "./Home";
import UserContext from "./context/UserContext";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 2.通过ThemeContext中Provider中value属性为后代提供数据 */}
        <ThemeContext.Provider value={{ color: "red", size: 30 }}>
          <UserContext.Provider value={{ name: "bik", age: 21 }}>
            <Home />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}
