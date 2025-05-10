import React, { memo } from "react";

const loading = memo(() => {
  return <div>loading....</div>;
});

loading.displayName = "loading";

export default loading;
