import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["all-tasks"],
    queryFn: async () => {
      const response = await axiosSecure(`/all-tasks`);
      return response.data;
    },
  });
  return { data, refetch, isLoading };
};

export default useAllTasks;
