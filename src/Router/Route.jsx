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
import PrivateRoute from "./PriavteRoute";
import PublicRoute from "./PublicRoute";
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
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "create-task",
        element: (
          <PrivateRoute>
            <CreateTask />
          </PrivateRoute>
        ),
      },
      {
        path: "all-task",
        element: (
          <PrivateRoute>
            <AllTask />
          </PrivateRoute>
        ),
      },
      {
        path: "all-tasks",
        element: (
          <PrivateRoute>
            <AllTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "update-task/:id",
        element: (
          <PrivateRoute>
            <UpdateTask />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/sign-up",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
]);

export default router;
