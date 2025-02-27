import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { useAppDispatch, RootState } from "@/store";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useSelector } from "react-redux";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import { IHighScoreInfo, IGoodPriceInfo, IDisCountInfo } from "@/types/home";
import HomeSectionV2 from "./c-cpns/home-section-v2";

const Home = memo(() => {
  // 从store获取数据
  const { goodPriceData, highScoreData, disCountData } = useSelector(
    (state: RootState) => ({
      goodPriceData: state.home.goodPriceInfo,
      highScoreData: state.home.highScoreInfo,
      disCountData: state.home.disCountInfo,
    }),
    shallowEqual
  );
  console.log(disCountData);
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
        <div className="good-price">
          <HomeSectionV1 infoData={goodPriceData as IGoodPriceInfo} />
        </div>
        <div className="hight-price">
          <HomeSectionV1 infoData={highScoreData as IHighScoreInfo} />
        </div>
        <div className="discount-price">
          <HomeSectionV2 infoData={disCountData as IDisCountInfo} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
