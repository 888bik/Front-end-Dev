import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { subNumberAction } from "../store/actionCreators";

export class Home extends PureComponent {
  subNumber(num) {
    this.props.subNumber(num);
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        Home: 计数:{counter}
        <button onClick={(e) => this.subNumber(1)}>-1</button>
        <button onClick={(e) => this.subNumber(10)}>-10</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    subNumber(num) {
      dispatch(subNumberAction(num));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
