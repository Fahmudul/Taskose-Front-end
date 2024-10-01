import axios from "axios";
import React, { useContext, useEffect } from "react";
import { UserAuthContext } from "../UserContext/UserContext";
import { Navigate } from "react-router";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const logOut = async () => {
    const response = await axiosSecure.get("/sign-out");
    if (response?.data?.status === 200) {
      return Navigate("/sign-in");
    }
  };
  // axiosSecure.interceptors.request.use((config) => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  //   return config;
  // });
  // const { logout } = useContext(UserAuthContext);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error from interceptor", error);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut();
        }
      }
    );
  }, []);

  return axiosSecure;
};
export default useAxiosSecure;
