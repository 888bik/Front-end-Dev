import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
import { useNavigate } from "react-router-dom";

interface IProps {
  name?: string;
}

const SectionFooter = memo((props: IProps) => {
  const { name } = props;
  let showMessage = "显示全部";
  if (name) {
    showMessage = `显示更多${name}房源`;
  }
  const navigate = useNavigate();
  function moreClick() {
    navigate("/entire");
  }
  return (
    <SectionFooterWrapper color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={moreClick}>
        <div className="text">{showMessage}</div>
      </div>
    </SectionFooterWrapper>
  );
});

export default SectionFooter;
