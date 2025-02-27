import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

//导出核心类型
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//home模块的store
export interface IGoodPriceItem {
  id: number;
  name: string;
  price: number;
  price_format: string;
  previews_count: number;
  picture_url: string;
  verify_info: {
    message: string[];
    text_color: string;
  };
  bottom_info: {
    content: string;
    content_color: string;
  };
  star_rating:number
}

export interface IHomeState {
  goodPriceInfo: {
    title: string;
    list: IGoodPriceItem[];
  };
}
export type RootState = {
  home: IHomeState;
};
//创建类型化的hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
