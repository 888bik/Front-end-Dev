import { createSlice } from "@reduxjs/toolkit";
const countSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    addNumber(state, { payload }) {
      state.counter += payload;
    },
    subNumber(state, { payload }) {
      state.counter -= payload;
    },
  },
});

export const { addNumber, subNumber } = countSlice.actions;
export default countSlice.reducer;
