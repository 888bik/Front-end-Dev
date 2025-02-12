import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumberAction } from "../store/actionCreators";

export class Profile extends PureComponent {
  addNumber(num) {
    // this.props.addNumber(num);
    this.props.addNumberAction(num);
  }
  render() {
    //直接从store获取需要的value
    const { counter } = this.props;
    return (
      <div>
        Profile计数:{counter}
        <button onClick={(e) => this.addNumber(1)}>+1</button>
        <button onClick={(e) => this.addNumber(10)}>+10</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
//写法1.函数形式:手动绑定dispatch
// const mapDispatchToProps = (dispatch) => {
//   return {
//     //将addNumber函数注入到组件的props中
//     addNumber(num) {
//       dispatch(addNumberAction(num));
//     },
//   };
// };
//写法2.对象形式:直接传递actionCreators对象,内部会自动使用dispatch包裹
const mapDispatchToProps = { addNumberAction };
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
