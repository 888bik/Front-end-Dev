import React, { memo, ReactNode, useEffect, useRef, useState } from "react";
import { ScrollViewWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

interface IProps {
  children: ReactNode | ReactNode[];
}

const ScrollView = memo((props: IProps) => {
  // let totalDistance = 0;
  //优化
  const totalDistanceRef = useRef(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const scrollContentRef = useRef(null);
  const [posIndex, setPosIndex] = useState(0);

  //组件渲染完毕,判断是否显示右侧按钮
  useEffect(() => {
    const scrollWidth: number = scrollContentRef.current.scrollWidth; //可以滚动的宽度,tabs总的宽度
    const clientWidth: number = scrollContentRef.current.clientWidth; //占据的宽度1032px,也就是home设置的宽度
    const Distance = scrollWidth - clientWidth; //剩下可以滚动的宽度
    //定义全局变量保存
    totalDistanceRef.current = Distance;
    //当剩余滚动宽度大于0的时候才显示右移的按钮
    setShowRight(Distance > 0);
  }, [props.children]);

  function handleControlClick(isRight: boolean) {
    const nextIndex = isRight ? posIndex + 1 : posIndex - 1;
    //获取第二个tab距离左边的宽度,让它移动这个距离
    const nextEl = scrollContentRef.current.children[nextIndex];
    const nextOffsetLeft = nextEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${nextOffsetLeft}px)`;
    //更新索引
    setPosIndex(nextIndex);
    //移动完毕再判断是否显示按钮
    setShowRight(totalDistanceRef.current > nextOffsetLeft);
    setShowLeft(nextOffsetLeft > 0);
  }
  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="control left">
          <div onClick={() => handleControlClick(false)}>
            <IconArrowLeft />
          </div>
        </div>
      )}

      {showRight && (
        <div className="control right">
          <div onClick={() => handleControlClick(true)}>
            <IconArrowRight />
          </div>
        </div>
      )}
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
