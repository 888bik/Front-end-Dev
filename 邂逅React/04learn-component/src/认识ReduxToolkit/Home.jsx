import React, { memo } from "react";
import { connect } from "react-redux";

const Home = memo((props) => {
  const { counter } = props;
  console.log(counter);
  return <div>Home</div>;
});
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(Home);
