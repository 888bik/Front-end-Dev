import React from "react";
import UserContext from "./context/UserContext";
import ThemeContext from "./context/ThemeContext";

export default function HomeTabBar() {
  return (
    <div>
      HomeTabBar:
      <ThemeContext.Consumer>
        {(value) => {
          return <h3>{value.color}</h3>;
        }}
      </ThemeContext.Consumer>
      <UserContext.Consumer>
        {(value) => {
          return (
            <h4>
              {value.age}-{value.name}
            </h4>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
