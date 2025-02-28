import React, { memo } from "react";
import { HomeSectionV3Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import { IBaseSectionInfoV1 } from "@/types/home";

interface IProps {
  infoData: IBaseSectionInfoV1;
}
const HomeSectionV3 = memo((props: IProps) => {
  const { infoData } = props;
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <RoomItem itemData={item} key={item.id} itemWidth="20%" />;
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </HomeSectionV3Wrapper>
  );
});

export default HomeSectionV3;
