import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left/header-left";
import HeaderCenter from "./c-cpns/header-center/header-center";
import HeaderRight from "./c-cpns/header-right/header-right";

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default Header;
