import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { useAppDispatch, RootState } from "@/store";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useSelector } from "react-redux";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";

// interface IGoodPriceData {
//   title: string;
// }

const Home = memo(() => {
  // 从store获取数据
  const { goodPriceData } = useSelector(
    (state: RootState) => ({
      goodPriceData: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  console.log(goodPriceData);
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
          <SectionHeader title={goodPriceData.title} />
          <SectionRoom roomList={goodPriceData.list} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
