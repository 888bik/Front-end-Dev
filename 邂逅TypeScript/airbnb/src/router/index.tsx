import App from "@/App";
import Detail from "@/views/detail";
import Entire from "@/views/entire";
import Home from "@/views/home";
import { createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
