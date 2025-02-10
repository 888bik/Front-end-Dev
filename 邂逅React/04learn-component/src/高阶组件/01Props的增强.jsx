import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      address: "清远",
    };
  }
  render() {
    const NewProfile = HightOrderComponent(Profile, this.state.address);
    return (
      <div>
        <NewProfile />
      </div>
    );
  }
}
class Profile extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        UserInfo:{this.props.name}-{this.props.age}
      </div>
    );
  }
}

function HightOrderComponent(WrappedComponent, others) {
  return class NewComponent extends PureComponent {
    constructor() {
      super();
      this.state = {
        userInfo: {
          name: "bik",
          age: 20,
        },
      };
    }
    render() {
      // 可以对传入的组件做一个拦截,进行其他处理
      //这里对每个传进来的组件添加userInfo属性
      return <WrappedComponent {...this.state.userInfo} others={others} />;
    }
  };
}
