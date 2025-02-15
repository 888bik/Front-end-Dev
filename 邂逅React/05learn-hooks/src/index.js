import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContext from "./hooks详解/useContext/context/ThemeContext";
import App from "./hooks详解/useImperativeHandle/App";
// import App from "./hooks详解/useImperativeHandle/demo2";
// import App from "./hooks详解/useImperativeHandle/App";
// import App from "./hooks详解/useRef/App";
// import App from "./hooks详解/useRef/01获取DOM";
// import App from "./hooks详解/useMemo/App";
// import App from "./hooks详解/useMemo/App";
// import App from "./hooks详解/useEffect/App";
// import App from "./hooks详解/useCallback/App";
// import App from "./hooks详解/useContext/App";
// import App from "./hooks详解/useState/App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext.Provider value={{ color: "red", fontSize: 30 }}>
    <App />
  </ThemeContext.Provider>
);
