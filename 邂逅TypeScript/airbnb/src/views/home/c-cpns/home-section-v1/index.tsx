import React, { memo } from "react";
import { HomeSectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";
// import { IGoodPriceInfo, IHighScoreInfo } from "@/types/home";
import SectionFooter from "@/components/section-footer";
import { IBaseSectionInfoV1 } from "@/types/home";

interface IProps {
  // infoData: IGoodPriceInfo | IHighScoreInfo;
  infoData: IBaseSectionInfoV1;
}
/**
 * 高分/高性价比组件
 */
const HomeSectionV1 = memo((props: IProps) => {
  const { infoData } = props;
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData?.subtitle} />
      <SectionRoom roomList={infoData.list} itemWidth="25%" />
      <SectionFooter />
    </HomeSectionV1Wrapper>
  );
});

export default HomeSectionV1;
