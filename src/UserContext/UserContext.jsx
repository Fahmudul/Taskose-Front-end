import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useNavigate } from "react-router";
export const UserAuthContext = React.createContext();
const UserContext = ({ children }) => {
  const [userInfo, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  // const { data } = useInfo();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const logout = async () => {
    const response = await axiosSecure("/sign-out");
    if (response?.data?.status === 200) {
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    }
  };
  useEffect(() => {
    // const getUser = async () => {
    //   const token = localStorage.getItem("token");
    //   if (token) {
    //     setLoading(true);
    //     try {
    //       const response = await axiosSecure.get(`/user-info`);
    //       if (response?.data) {
    //         setUser(response?.data);
    //         console.log(response?.data);
    //         setLoading(false);
    //       } else {
    //         setUser(null);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       setUser(null);
    //     }
    //   } else {
    //     setUser(null);
    //     setLoading(false);
    //   }
    // };
    // getUser();
    const getUser = async () => {
      const response = await axiosSecure.get(`/user-info`);
      if (response?.data) {
        setUser(response?.data);
        console.log(response?.data);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    };
    getUser();
  }, []);

  console.log(userInfo);
  const authInfo = { userInfo, loading, logout };
  return (
    <UserAuthContext.Provider value={authInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserContext;
