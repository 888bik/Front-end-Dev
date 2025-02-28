import {
  getDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getPlusData,
  getRecommendData,
} from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "home/fetchData",
  (payload, { dispatch }) => {
    // try {
    //   const [goodPriceRes, highScoreRes, discountRes] = await Promise.all([
    //     getHomeGoodPriceData(),
    //     getHomeHighScoreData(),
    //     getDiscountData(),
    //   ]);
    //   dispatch(changeGoodPriceInfo(goodPriceRes));
    //   dispatch(changeHighScoreInfo(highScoreRes));
    //   dispatch(changeDisCountInfo(discountRes));
    // } catch (error) {
    //   console.log("获取数据失败", error);
    // }
    try {
      getHomeGoodPriceData().then((res) => {
        dispatch(changeGoodPriceInfo(res));
      });
      getHomeHighScoreData().then((res) => {
        dispatch(changeHighScoreInfo(res));
      });
      getDiscountData().then((res) => {
        dispatch(changeDisCountInfo(res));
      });
      getRecommendData().then((res) => {
        dispatch(changeRecommendInfo(res));
      });
      getPlusData().then((res) => {
        dispatch(changePlusInfo(res));
      });
    } catch (error) {
      console.log("获取数据失败:" + error);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    disCountInfo: {},
    recommendInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDisCountInfo(state, { payload }) {
      state.disCountInfo = payload;
    },
    changeRecommendInfo(state, { payload }) {
      state.recommendInfo = payload;
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload;
    },
  },
  // extraReducers: (builder) => {
  //   // extraReducers 用于处理异步请求模块的 action
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload;
  //   });
  // },
});

export const {
  changeGoodPriceInfo,
  changeHighScoreInfo,
  changeDisCountInfo,
  changeRecommendInfo,
  changePlusInfo,
} = homeSlice.actions;
export default homeSlice.reducer;
