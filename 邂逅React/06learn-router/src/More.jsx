import React, { memo } from "react";
import { useLocation } from "react-router-dom";

const More = memo(() => {
  const location = useLocation();
  const { name, id } = location.state;
  return (
    <div>
      More:name:{name}-id:{id}
    </div>
  );
});

export default More;
