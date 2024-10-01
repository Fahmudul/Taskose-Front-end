import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserName from "../../Components/UserName/UserName";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useInfo from "../../Hooks/useInfo";
import { UserAuthContext } from "../../UserContext/UserContext";

const CreateTask = () => {
  const axiosSecure = useAxiosSecure();
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");

  const { userInfo } = useContext(UserAuthContext);
  console.log(userInfo);
  const [taskInfo, setTaskInfo] = useState({
    taskTitle: "",
    taskDescription: "",
    dueDate: "",
    priority: "low",
    assignedTo: {},
  });

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      let adminAssignedtaskInfo = {};
      const form = new FormData(e.target);
      if (userInfo.role === "Admin") {
        adminAssignedtaskInfo = {
          ...taskInfo,
          assignedTo: [
            {
              email: email,
              status: "To Do",
            },
          ],
        };
        const response = await axiosSecure.post(
          "/create-task",
          adminAssignedtaskInfo
        );
        if (response?.data?.status === 200) {
          toast.success(response?.data?.message);
          return (window.location.href = "/dashboard/all-tasks");
        }
      }
      // console.log(taskInfo);
      const response = await axiosSecure.post("/create-task", taskInfo);
      if (response?.data?.status === 200) {
        toast.success(response?.data?.message);
        return (window.location.href = "/dashboard/all-task");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  console.log(taskInfo);

  return (
    <div className="create-task mx-auto rounded-3xl shadow-xl ">
      <h1 className="text-center mt-6 text-3xl font-bold title_">
        Create New Task
      </h1>
      <div className="">
        <form
          onSubmit={handleCreateTask}
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
                name="taskTitle"
                required
                onChange={(e) =>
                  setTaskInfo({ ...taskInfo, taskTitle: e.target.value })
                }
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
                style={{ border: "none" }}
                type="date"
                required
                onChange={(e) =>
                  setTaskInfo({ ...taskInfo, dueDate: e.target.value })
                }
                id="dueDate"
              />
            </div>
            <div className="flex  justify-between ">
              <div className="flex items-start gap-3  ">
                <label
                  htmlFor=""
                  className="text-xl font-semibold text-[#f5deb3] mr-[38px]"
                >
                  Assign to
                </label>

                <input
                  className={`username input_   ml-8 ${
                    userInfo?.role === "Admin" ? "" : "cursor-not-allowed"
                  }`}
                  defaultValue={
                    userInfo?.role === "Admin" ? email : userInfo?.email
                  }
                  required
                  type="email"
                  name="email"
                  onChange={(e) =>
                    setTaskInfo({
                      ...taskInfo,
                      assignedTo: {
                        ...taskInfo.assignedTo,
                        email: e.target.value,
                        status: "To Do",
                      },
                    })
                  }
                  disabled={userInfo?.role === "Admin" ? false : true}
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
                      defaultChecked
                      id="low"
                      value="low"
                      onChange={(e) =>
                        setTaskInfo({ ...taskInfo, priority: e.target.value })
                      }
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
                      onChange={(e) =>
                        setTaskInfo({ ...taskInfo, priority: e.target.value })
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
                      onChange={(e) =>
                        setTaskInfo({ ...taskInfo, priority: e.target.value })
                      }
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
                required
                name="taskDescription"
                onChange={(e) =>
                  setTaskInfo({ ...taskInfo, taskDescription: e.target.value })
                }
              />
            </div>
          </div>

          <input className="btn_" type="submit" value="Create Task" />
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
