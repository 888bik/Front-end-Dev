import React, { memo } from "react";
import Header from "./components/app-header";
import Footer from "./components/app-footer";

const App = memo(() => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="content">content</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
});

export default App;
