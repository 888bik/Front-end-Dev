import Home from "../Home";
import NotFound from "../NotFound";
import Recommend from "../Recommend";
import Ranking from "../Ranking";
import More from "../More";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "", //空字符表示父路由本身,也就是home
        element: <Navigate to="recommend" />, //相对路径
      },
      {
        path: "recommend/:songId",
        element: <Recommend />,
      },
      {
        path: "ranking",
        element: <Ranking />,
      },
      {
        path: "more",
        element: <More />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes;
