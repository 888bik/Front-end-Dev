import App from "@/App";
import NotFound from "@/views/notFound";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/views/home"));
const Detail = lazy(() => import("@/views/detail"));
const Entire = lazy(() => import("@/views/entire"));
// import type { RouteObject } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "entire",
        element: <Entire />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
]);

export default routers;
