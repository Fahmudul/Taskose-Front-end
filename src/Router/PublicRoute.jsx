import React, { useContext } from "react";
import { Navigate } from "react-router";
import { UserAuthContext } from "../UserContext/UserContext";
import Loader from "../Components/Loader/Loader";

const PublicRoute = ({ children }) => {
  // const token = localStorage.getItem("token");
  const { userInfo, loading } = useContext(UserAuthContext);
  if (loading)
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  if (userInfo) {
    if (userInfo.role === "Admin") {
      return <Navigate to="/dashboard/all-tasks" />;
    } else {
      return <Navigate to="/dashboard/all-task" />;
    }
  }
  return children;
};

export default PublicRoute;
