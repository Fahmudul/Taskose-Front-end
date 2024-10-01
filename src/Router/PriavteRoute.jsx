import React, { useContext } from "react";
import { Navigate } from "react-router";
import { UserAuthContext } from "../UserContext/UserContext";
import Loader from "../Components/Loader/Loader";

const PriavteRoute = ({ children }) => {
  const { userInfo, loading } = useContext(UserAuthContext);
  const token = localStorage.getItem("token");
  console.log(userInfo);
  console.log(loading);
  // if (!loading && !userInfo)
  //   return (
  //     <div className="min-h-screen w-full flex justify-center items-center">
  //       <Loader />
  //     </div>
  //   );
  if (loading )
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  if (!userInfo) {
    console.log(userInfo);
    console.log(loading);
    return <Navigate to="/sign-in" />;
  }
  return children;
};

export default PriavteRoute;
