export interface IRoomInfo {
  _id:number
  id: number;
  name: string;
  price: number | string;
  price_format: string;
  reviews_count: number;
  picture_url?: string;
  picture_urls:string[]
  image_url: string;
  city?: string;
  verify_info: {
    messages: string[];
    text_color: string;
  };
  bottom_info: {
    content: string;
    content_color: string;
  };
  star_rating: number;
}
// export interface IRoomInfoV2{
// }

export interface IBaseSectionInfoV1 {
  _id?: string | number;
  type?: string;
  title: string;
  list: IRoomInfo[];
  subtitle?: string;
}
export interface IBaseSectionInfoV2 {
  _id?: string | number;
  type?: string;
  title: string;
  subtitle: string;
  dest_address: IAddress[];
  dest_list: {
    [index: string]: IRoomInfo[];
  };
}
/**
 * tabs城市的类型
 */
interface IAddress {
  name: string;
  homes: string[];
}
/**
 * 高性价比房源的类型
 */
// export interface IGoodPriceInfo extends IBaseSectionInfoV1 {
//   subtitle?: string;
// }
/**
 * 高分房源的类型
 */
// export interface IHighScoreInfo extends IBaseSectionInfoV1 {
//   subtitle: string;
// }
/**
 * 折扣房源的类型
 */
// export interface IDisCountInfo extends IBaseSectionInfoV2 {
//   subtitle: string;
// }
// export interface IRecommendInfo extends IBaseSectionInfoV2 {
//   subtitle: string;
// }
// export interface IPlusInfo extends IBaseSectionInfoV1 {
//   subtitle: string;
// }
// export interface ILongForInfo extends IBaseSectionInfoV1 {
//   subtitle: string;
// }
export interface IHomeState {
  goodPriceInfo: IBaseSectionInfoV1;
  highScoreInfo: IBaseSectionInfoV1;
  disCountInfo: IBaseSectionInfoV2;
  recommendInfo: IBaseSectionInfoV2;
  plusInfo: IBaseSectionInfoV1;
  longForInfo: IBaseSectionInfoV1;
}

