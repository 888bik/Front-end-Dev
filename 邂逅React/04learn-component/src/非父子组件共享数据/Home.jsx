import React, { Component } from "react";
import HomeBanner from "./HomeBanner";
import HomeTabBar from "./HomeTabBar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeBanner />
        <HomeTabBar/>
      </div>
    );
  }
}
