import React, { memo } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btns">
        <div className="login btn">登录</div>
        <div className="register btn">注册</div>
        <div className="lang btn">
          <IconGlobal />
        </div>
      </div>
      
      <div className="profile">
        <div className="menu">
          <IconMenu />
        </div>
        <div className="avatar">
          <IconAvatar />
        </div>
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
