// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./assets/css/index.less";
import "./services/modules/home/index.js";
import "./services/modules/entire/index.js"

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <App />
  // </StrictMode>
);
