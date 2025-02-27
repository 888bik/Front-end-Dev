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
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
// import { Suspense } from "react";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Suspense fallback="Loading....">
        <RouterProvider router={routers} />
      </Suspense>
    </Provider>
  </ThemeProvider>
  // </StrictMode>
);
