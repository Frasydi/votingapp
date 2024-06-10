import { createBrowserRouter } from "react-router-dom";
import Home from "./router/home";
import RealCount from "./router/realcount";
import RealCount2 from "./router/rekap2";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/rekap",
      element: <RealCount />,
    },
    {
      path: "/rekaplive",
      element: <RealCount2 />,
    },
  ]);

export default router