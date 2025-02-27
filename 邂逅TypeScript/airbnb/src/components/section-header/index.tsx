import React, { memo } from "react";
import { SectionHeaderWrapper } from "./style";

interface IProps {
  title?: string;
  subtitle?: string;
}
const SectionHeader = memo((props: IProps) => {
  const { title, subtitle } = props;
  return (
    <SectionHeaderWrapper>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </SectionHeaderWrapper>
  );
});

export default SectionHeader;
