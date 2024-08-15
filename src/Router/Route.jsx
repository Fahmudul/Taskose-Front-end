import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
