import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IHomeState } from "@/types/home";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
//home模块的store
export type RootState = {
  home: IHomeState;
};
//创建类型化的hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
