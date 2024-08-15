import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router";

const PriavteRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div></div>;
};

export default PriavteRoute;
