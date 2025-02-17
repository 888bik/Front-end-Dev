import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/count";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
