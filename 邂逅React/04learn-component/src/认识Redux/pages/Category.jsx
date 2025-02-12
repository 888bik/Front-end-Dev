import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchBannerDataAction } from "../store/actionCreators";

export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchBannerData();
  }
  render() {
    const { banner } = this.props;
    return (
      <div>
        {banner.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBannerData() {
      console.log("hello");
      dispatch(fetchBannerDataAction());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    banner: state.banner,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
