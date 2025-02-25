// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.less";
import "./services/modules/home/index.js";
import "./services/modules/entire/index.js";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/index.js";
import "normalize.css";
import { RouterProvider } from "react-router-dom";
import routers from "./router/index.js";
// import { Suspense } from "react";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  // <Suspense fallback="loading">
  <ThemeProvider theme={theme}>
    <RouterProvider router={routers} />
  </ThemeProvider>
  // </Suspense>
  // </StrictMode>
);
