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
export interface IRoomInfo {
  id: number;
  name: string;
  price: number;
  price_format: string;
  reviews_count: number;
  picture_url: string;
  verify_info: {
    message: string[];
    text_color: string;
  };
  bottom_info: {
    content: string;
    content_color: string;
  };
  star_rating: number;
}
interface IBaseSectionInfo {
  title: string;
  list: IRoomInfo[]; // 假设有统一的 RoomItem 类型
}
export interface IGoodPriceInfo extends IBaseSectionInfo {
  subtitle?: string;
}
export interface IHighScoreInfo extends IBaseSectionInfo {
  subtitle: string;
}

export interface IHomeState {
  goodPriceInfo: IGoodPriceInfo;
  highScoreInfo: IHighScoreInfo;
}
export type RootState = {
  home: IHomeState;
};
//创建类型化的hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
