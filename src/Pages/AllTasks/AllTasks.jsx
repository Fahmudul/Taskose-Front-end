import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import TaskCard from "../../Components/TaskCard/TaskCard";

const AllTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allTasks = [] } = useQuery({
    queryKey: ["all-tasks"],
    queryFn: async () => {
      const { data } = await axiosSecure("/all-tasks-admin");
      return data.tasks;
    },
  });
  console.log(allTasks);
  return (
    <div className=" flex items-center w-[90%]  mx-auto h-[90%] flex-col bg-linear rounded-3xl shadow-2xl">
      <h1 className="text-center mt-6 text-3xl font-bold my-10 text-[#f5deb3]">
        All Task
      </h1>
      <div className="grid grid-cols-5  w-full gap-6 px-10 overflow-y-auto h-[87%] max-h-[670px] ">
        {allTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
