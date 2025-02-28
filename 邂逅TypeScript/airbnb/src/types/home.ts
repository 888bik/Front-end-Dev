export interface IRoomInfo {
  id: number;
  name: string;
  price: number;
  price_format: string;
  reviews_count: number;
  picture_url: string;
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
/**
 * 房间详细数据的类型
 */
interface IBaseSectionInfoV1 {
  id: string | number;
  type: string;
  title: string;
  list: IRoomInfo[];
}
interface IBaseSectionInfoV2 {
  id: string | number;
  type: string;
  title: string;
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
export interface IGoodPriceInfo extends IBaseSectionInfoV1 {
  subtitle?: string;
}
/**
 * 高分房源的类型
 */
export interface IHighScoreInfo extends IBaseSectionInfoV1 {
  subtitle: string;
}
/**
 * 折扣房源的类型
 */
export interface IDisCountInfo extends IBaseSectionInfoV2 {
  subtitle: string;
}
export interface IHomeState {
  goodPriceInfo: IGoodPriceInfo;
  highScoreInfo: IHighScoreInfo;
  disCountInfo: IDisCountInfo;
}
