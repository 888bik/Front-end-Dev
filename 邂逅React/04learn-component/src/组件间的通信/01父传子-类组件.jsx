import React, { Component } from "react";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "bik",
      age: 21,
    };
  }
  render() {
    const { name, age } = this.state;
    return (
      <div>
        <Children name={name} age={age} />
      </div>
    );
  }
}
//子组件
class Children extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        父组件传递的数据:{this.props.name}-{this.props.age}
      </div>
    );
  }
}
