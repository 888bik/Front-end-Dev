import React, { memo } from "react";

const App = memo(() => {
  return (
    <div>
      <div className="header">header</div>
      <div className="content">content</div>
      <div className="footer">footer</div>
    </div>
  );
});

export default App;
