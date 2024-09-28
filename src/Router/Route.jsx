import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Profile from "../Components/Profile/Profile";
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
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default router;
