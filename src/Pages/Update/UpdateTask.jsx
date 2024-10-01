import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import UserName from "../../Components/UserName/UserName";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useInfo from "../../Hooks/useInfo";
import { useQuery } from "@tanstack/react-query";
import { UserAuthContext } from "../../UserContext/UserContext";

const CreateTask = () => {
  const axiosSecure = useAxiosSecure();
  const { userInfo } = useContext(UserAuthContext);
  console.log(userInfo);
  const { id: taskId } = useParams();
  const { data = {} } = useQuery({
    queryKey: ["task-info"],
    queryFn: async () => {
      const response = await axiosSecure(`/task-info/${taskId}`);
      return response.data.singleTask;
    },
  });
  console.log(data?.priority);
  console.log(data);
  let taskInfo;
  const handleUpdateTask = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    taskInfo = {
      taskTitle: form.get("taskTitle"),
      taskDescription: form.get("taskDescription"),
      dueDate: form.get("dueDate"),
      priority: form.get("radio"),
      assignedTo: [{ email: userInfo?.email, status: "To Do" }],
    };
    console.log(taskInfo);
    if (
      !taskInfo.priority ||
      !taskInfo.taskTitle ||
      !taskInfo.dueDate ||
      !taskInfo.taskDescription
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      const response = await axiosSecure.patch(
        `/update-task/${taskId}`,
        taskInfo
      );

      console.log(response.data);
      if (response?.data?.status === 200) {
        toast.success(response?.data?.message);
        // return Navigate("/dashboard/all-task");
        setTimeout(() => {
          window.location.href = "/dashboard/all-task";
        }, 1200);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  console.log(taskInfo);

  return (
    <div className="create-task mx-auto rounded-3xl shadow-xl ">
      <h1 className="text-center mt-6 text-3xl font-bold title_">
        Update Task
      </h1>
      <div className="">
        <form
          onSubmit={handleUpdateTask}
          className="flex flex-col justify-center items-center w-[80%] mx-auto py-4"
        >
          <div className="w-full  space-y-5">
            <div className="flex items-center gap-3 mx-auto  justify-between">
              <label
                htmlFor=""
                className="text-xl font-semibold text-[#f5deb3]"
              >
                Task title
              </label>
              <input
                placeholder="Enter task title"
                className="username input__ w-[90%]"
                type="text"
                defaultValue={data?.taskTitle}
                name="taskTitle"
              />
            </div>
            <div className="flex items-center gap-3 mx-auto  justify-between">
              <label
                htmlFor="dueDate"
                className="text-xl font-semibold text-[#f5deb3]"
              >
                Due Date
              </label>
              <input
                placeholder="Enter task title"
                className="username input__ w-[90%]"
                name="dueDate"
                style={{ border: "none" }}
                type="date"
                id="dueDate"
              />
            </div>
            <div className="flex  justify-between ">
              <div className="flex items-start gap-3  ">
                <label
                  htmlFor=""
                  className="text-xl font-semibold text-[#f5deb3] mr-[38px]"
                >
                  Assigned to
                </label>
                <input
                  className={`username input_   ml-8 ${
                    userInfo?.role === "Admin" ? "" : "cursor-not-allowed"
                  }`}
                  type="text"
                  name="user"
                  defaultValue={
                    userInfo?.role === "Admin" ? "" : userInfo?.email
                  }
                  disabled={userInfo?.data?.role === "Admin" ? false : true}
                />
              </div>
              <div className="flex flex-col items-start gap-3  w-[20%]">
                <label
                  htmlFor=""
                  className="text-xl font-semibold text-[#f5deb3] mr-5"
                >
                  Priority
                </label>
                <div className="radio-input flex-1 flex space-x-3">
                  <div className="flex w-full items-center text-[#989fa0]">
                    <label htmlFor="low">Low</label>
                    <input
                      name="radio"
                      type="radio"
                      className="_input"
                      defaultChecked={data?.priority === "low" ? true : false}
                      id="low"
                      value="low"
                    />
                  </div>
                  <div className="flex w-full items-center text-[#989fa0]">
                    <label htmlFor="medium">Medium</label>
                    <input
                      name="radio"
                      type="radio"
                      className="_input"
                      id="medium"
                      value="medium"
                      defaultChecked={
                        data?.priority === "medium" ? true : false
                      }
                    />
                  </div>
                  <div className="flex  w-full items-center text-[#989fa0]">
                    <label htmlFor="high">High</label>
                    <input
                      name="radio"
                      type="radio"
                      className="_input"
                      id="high"
                      value="high"
                      defaultChecked={data?.priority === "high" ? true : false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 mx-auto  justify-between">
              <label
                htmlFor=""
                className="text-xl font-semibold text-[#f5deb3] mt-5"
              >
                Description
              </label>
              <textarea
                placeholder="Write your description"
                className="username input__ w-[90%] "
                rows={7}
                defaultValue={data?.taskDescription}
                name="taskDescription"
              />
            </div>
          </div>

          <input className="btn_" type="submit" value="Update Task" />
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
