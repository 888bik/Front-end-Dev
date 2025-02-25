import React, { memo } from "react";
import Header from "./components/app-header";
import Footer from "./components/app-footer";
import { Outlet } from "react-router-dom";

const App = memo(() => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="page">
        {/* 占位 */}
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
});

export default App;
