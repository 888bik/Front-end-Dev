import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
  }
  render() {
    const APP = LoginAuth(App);
    return (
      <div>
        <APP isLogin={this.state.isLogin} />
      </div>
    );
  }
}
function LoginAuth(WrappedComponent) {
  return (props) => {
    if (props.isLogin) {
      return <WrappedComponent />;
    } else {
      return <LoginPage />;
    }
  };
}
function LoginPage() {
  return <h2>登录界面</h2>;
}
function Page() {
  return <h2>用户已经登录</h2>;
}
