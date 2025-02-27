import React, { memo } from "react";
import { NotFoundWrapper } from "./styled";

const NotFound = memo(() => {
  return (
    <NotFoundWrapper>
      <div>页面不存在,请联系管理员!!!!</div>
    </NotFoundWrapper>
  );
});

export default NotFound;
