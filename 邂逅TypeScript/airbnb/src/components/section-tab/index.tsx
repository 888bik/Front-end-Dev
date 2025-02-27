import React, { memo, useState } from "react";
import { SectionTabWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";
import classNames from "classnames";

interface IProps {
  tabNames: string[];
  tabClickFromP: (item: string) => void;
}
const SectionTab = memo((props: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { tabNames, tabClickFromP } = props;
  function tabClick(item, index) {
    setCurrentIndex(index);
    tabClickFromP(item);
  }
  return (
    <SectionTabWrapper>
      <ScrollView>
        {tabNames?.map((item, index) => {
          return (
            <div
              key={item}
              className={classNames("item", { active: index === currentIndex })}
              onClick={() => tabClick(item, index)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </SectionTabWrapper>
  );
});

export default SectionTab;
