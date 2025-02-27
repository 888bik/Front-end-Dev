import React, { memo } from "react";
import { SectionHeaderWrapper } from "./style";

interface IProps {
  title: string;
}
const SectionHeader = memo((props: IProps) => {
  const { title } = props;
  return (
    <SectionHeaderWrapper>
      <div className="title">{title}</div>
      <div className="subtitle"></div>
    </SectionHeaderWrapper>
  );
});

export default SectionHeader;
