import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { useAppDispatch, RootState } from "@/store";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useSelector } from "react-redux";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import { isEmptyO } from "@/utils/isEmpty";
import HomeLongFor from "./c-cpns/home-longfor";
// import {
//   IHighScoreInfo,
//   IGoodPriceInfo,
//   IDisCountInfo,
//   IRecommendInfo,
//   IPlusInfo,
// } from "@/types/home";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from "./c-cpns/home-section-v3";

const Home = memo(() => {
  // 从store获取数据
  const {
    goodPriceData,
    highScoreData,
    disCountData,
    recommendData,
    plusData,
    longForData,
  } = useSelector(
    (state: RootState) => ({
      goodPriceData: state.home.goodPriceInfo,
      highScoreData: state.home.highScoreInfo,
      disCountData: state.home.disCountInfo,
      recommendData: state.home.recommendInfo,
      plusData: state.home.plusInfo,
      longForData: state.home.longForInfo,
    }),
    shallowEqual
  );
  //这里打印四次
  // console.log(longForData);

  // 派发事件
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <div className="Banner">
        <HomeBanner />
      </div>

      <div className="content">
        <div className="discount-price">
          {isEmptyO(disCountData) && <HomeSectionV2 infoData={disCountData} />}
        </div>
        <div className="recommend">
          {isEmptyO(recommendData) && (
            <HomeSectionV2 infoData={recommendData} />
          )}
        </div>
        <div className="long-for">
          {isEmptyO(longForData) && (
            <HomeLongFor infoData={longForData}></HomeLongFor>
          )}
        </div>
        <div className="good-price">
          {isEmptyO(goodPriceData) && (
            <HomeSectionV1 infoData={goodPriceData} />
          )}
        </div>
        <div className="hight-price">
          {isEmptyO(highScoreData) && (
            <HomeSectionV1 infoData={highScoreData} />
          )}
        </div>
        <div className="plus">
          {isEmptyO(plusData) && <HomeSectionV3 infoData={plusData} />}
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
