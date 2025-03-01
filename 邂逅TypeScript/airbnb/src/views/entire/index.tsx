import React, { memo } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter />
    </EntireWrapper>
  );
});

export default Entire;
