import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { useAppDispatch, RootState } from "@/store";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useSelector } from "react-redux";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import {
  IHighScoreInfo,
  IGoodPriceInfo,
  IDisCountInfo,
  IRecommendInfo,
} from "@/types/home";
import HomeSectionV2 from "./c-cpns/home-section-v2";

const Home = memo(() => {
  // 从store获取数据
  const { goodPriceData, highScoreData, disCountData, recommendData } =
    useSelector(
      (state: RootState) => ({
        goodPriceData: state.home.goodPriceInfo,
        highScoreData: state.home.highScoreInfo,
        disCountData: state.home.disCountInfo,
        recommendData: state.home.recommendInfo,
      }),
      shallowEqual
    );
  //判断对象是否为空
  function isEmptyO(obj) {
    return !!Object.keys(obj).length;
  }
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
          {isEmptyO(disCountData) && (
            <HomeSectionV2 infoData={disCountData as IDisCountInfo} />
          )}
        </div>
        <div className="recommend">
          <HomeSectionV2 infoData={recommendData as IRecommendInfo} />
        </div>
        <div className="good-price">
          {isEmptyO(goodPriceData) && (
            <HomeSectionV1 infoData={goodPriceData as IGoodPriceInfo} />
          )}
        </div>
        <div className="hight-price">
          {isEmptyO(highScoreData) && (
            <HomeSectionV1 infoData={highScoreData as IHighScoreInfo} />
          )}
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
