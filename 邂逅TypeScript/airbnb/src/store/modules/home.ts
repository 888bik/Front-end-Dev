import { getHomeGoodPriceData } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "home/fetchData",
  async () => {
    const res = await getHomeGoodPriceData();
    return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    // changeGoodPriceInfo(state, action) {
    //   state.goodPriceInfo = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // extraReducers 用于处理异步请求模块的 action
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload;
    });
  },
});

// export const {} = homeSlice.actions;
export default homeSlice.reducer;
