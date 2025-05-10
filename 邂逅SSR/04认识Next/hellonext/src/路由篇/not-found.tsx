import React, { memo } from "react";

const NotFound = memo(() => {
  return (
    <div className="not-found">
      <h1>404 not found Page</h1>
    </div>
  );
});

NotFound.displayName = "notfound";

export default NotFound;
