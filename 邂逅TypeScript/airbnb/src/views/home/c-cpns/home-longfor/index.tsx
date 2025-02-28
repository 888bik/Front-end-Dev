import React, { memo } from "react";
import { HomeLongForWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";
import { IBaseSectionInfoV1 } from "@/types/home";
import SectionHeader from "@/components/section-header";
import LongForItem from "@/components/longfor-item";

interface IProps {
  infoData: IBaseSectionInfoV1;
}
const HomeLongFor = memo((props: IProps) => {
  const { infoData } = props;
  return (
    <HomeLongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longFor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongForItem itemData={item} />;
          })}
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  );
});

export default HomeLongFor;
