import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // 监听点击事件
    function widowHandleClick() {
      setShowPanel(false);
    }
    window.addEventListener("click", widowHandleClick, true);
    //取消监听
    return () => {
      window.removeEventListener("click", widowHandleClick, true);
    };
  }, []);

  function handleShowPanel() {
    setShowPanel(true);
  }
  return (
    <RightWrapper>
      <div className="btns">
        <div className="login btn">登录</div>
        <div className="register btn">注册</div>
        <div className="lang btn">
          <IconGlobal />
        </div>
      </div>

      <div className="profile" onClick={handleShowPanel}>
        <div className="menu">
          <IconMenu />
        </div>
        <div className="avatar">
          <IconAvatar />
        </div>

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">登录</div>
              <div className="item">注册</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
