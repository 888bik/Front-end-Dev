import React, { createRef, PureComponent } from "react";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "",
    };
    this.titleRef = createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      message: event.target[0].value,
    });
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" ref={this.titleRef} />
          {message}
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }
}
