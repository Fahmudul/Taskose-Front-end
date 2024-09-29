import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Profile from "../Components/Profile/Profile";
import CreateTask from "../Pages/CreateTask/CreateTask";
import AllTask from "../Pages/AllTask/AllTask";
import UpdateTask from "../Pages/Update/UpdateTask";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AllTasks from "../Pages/AllTasks/AllTasks";
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
      {
        path: "statistics",
        element: <AllUsers />,
      },
      {
        path: "create-task",
        element: <CreateTask />,
      },
      {
        path: "all-task",
        element: <AllTask />,
      },
      {
        path: "all-tasks",
        element: <AllTasks />,
      },
      {
        path: "update-task/:id",
        element: <UpdateTask />,
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
