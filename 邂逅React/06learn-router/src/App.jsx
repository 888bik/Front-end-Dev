import React, { memo } from "react";
import { Link, useRoutes } from "react-router-dom";
import routes from "./router";

const App = memo(() => {
  return <div>{useRoutes(routes)}</div>;
});

export default App;
