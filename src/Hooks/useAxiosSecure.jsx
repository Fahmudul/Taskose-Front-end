import axios from "axios";
import React from "react";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  axiosSecure.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error.reponse.status === 401 || error.response.status === 403) {
        console.log(error.response.status);
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};
export default useAxiosSecure;
