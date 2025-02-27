import React, { memo, ReactNode, useRef } from "react";
import { ScrollViewWrapper } from "./style";

interface IProps {
  children: ReactNode | ReactNode[];
}

const ScrollView = memo((props: IProps) => {
  const scrollContentRef = useRef(null);
  return (
    <ScrollViewWrapper>
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {/* 插槽 */}
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
