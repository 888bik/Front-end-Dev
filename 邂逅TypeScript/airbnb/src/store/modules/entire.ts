import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEntireDataAction = createAsyncThunk(
  "entire/fetchData",
  (_, { dispatch }) => {
    try {
      getEntireRoomList().then((res) => {
        dispatch(changeEntireRoomList(res));
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const entireSlice = createSlice({
  name: "entire",
  initialState: {
    RoomList: [],
    totalCount: 0,
  },
  reducers: {
    changeEntireRoomList(state, { payload }) {
      state.RoomList = payload.list;
      state.totalCount = payload.totalCount;
    },
  },
});
export const { changeEntireRoomList } = entireSlice.actions;
export default entireSlice.reducer;
