// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./assets/css/index.less";
import "./services/modules/home/index.js";
import "./services/modules/entire/index.js";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/index.js";
import "normalize.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  // </StrictMode>
);
