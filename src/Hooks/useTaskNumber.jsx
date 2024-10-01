import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";

const useTaskNumber = () => {
  const axiosSecure = useAxiosSecure();
  const { data: documentCount = 0 } = useQuery({
    queryKey: ["task-number"],
    queryFn: async () => {
      const response = await axiosSecure("/number-of-tasks");
      console.log(response);
      return response.data.taskNumber;
    },
  });
  return { documentCount };
};

export default useTaskNumber;
