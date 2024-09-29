import React from "react";
import useAllTasks from "../../Hooks/useAllTasks";
import TaskCard from "../../Components/TaskCard/TaskCard";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllTask = () => {
  const { data: allTask = [], refetch } = useAllTasks();
  const axiosSecure = useAxiosSecure();
  console.log(allTask.tasks);

  const { mutateAsync } = useMutation({
    mutationKey: ["delete-task"],
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/delete-task/${id}`);
      console.log(data);
      return data;
    },
    onSuccess: (data) => {
      if (data.status === 200) {
        refetch();
      }
    },
  });
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync(id);
        Swal.fire({
          title: "Deleted!",
          text: "Task has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className=" flex items-center w-[90%]  mx-auto h-[90%] flex-col bg-linear rounded-3xl shadow-2xl">
      <h1 className="text-center mt-6 text-3xl font-bold my-10 text-[#f5deb3]">
        All Task
      </h1>
      <div className="grid grid-cols-5  w-full gap-6 px-10 overflow-y-auto h-[87%] max-h-[670px] ">
        {allTask.tasks?.map((task) => (
          <TaskCard key={task._id} task={task} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AllTask;
