import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";

const useInfo = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["user-info"],
    queryFn: async () => {
      const reponse = await axiosSecure(
        `${import.meta.env.VITE_BASE_URL}/user-info`
      );
      return reponse.data;
    },
  });
  return { data, refetch, isLoading };
};

export default useInfo;
