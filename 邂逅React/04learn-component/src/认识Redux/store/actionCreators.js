import {
  ADD_NUMBER,
  CHANGE_AGE,
  CHANGE_BANNER,
  CHANGE_NAME,
  SUB_NUMBER,
} from "./constants";
import axios from "axios";

export const changeNameAction = (name) => {
  return {
    type: CHANGE_NAME,
    name,
  };
};
export const changAgeAction = (age) => {
  return {
    type: CHANGE_AGE,
    age,
  };
};
export const addNumberAction = (num) => {
  return {
    type: ADD_NUMBER,
    num,
  };
};
// export const addNumberAction = (num) => ({
//   type: actionTypes.ADD_NUMBER,
//   num,
// });
export const subNumberAction = (num) => {
  return {
    type: SUB_NUMBER,
    num,
  };
};
export const fetchBannerDataAction = () => {
  return (dispatch) => {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const data = res.data.data;
      //派发更新数据的action
      dispatch(changeBannersAction(data.banner.list));
    });
  };
};
export const changeBannersAction = (data) => {
  console.log(data);
  return {
    type: CHANGE_BANNER,
    payload: data,
  };
};
