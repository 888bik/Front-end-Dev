import React, { memo, useState } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./router";

const App = memo(() => {
  const navigate = useNavigate();
  function navigator(path) {
    navigate(path);
  }
  return (
    <div className="app">
      <div className="header">
        <h2>Header</h2>
      </div>

      <div className="content">
        <button onClick={(e) => navigator("/category")}>跳转</button>
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
});

export default App;
