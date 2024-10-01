import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import TaskCard from "../../Components/TaskCard/TaskCard";
import { IoSearch } from "react-icons/io5";

const AllTasks = () => {
  const axiosSecure = useAxiosSecure();
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await axiosSecure("/all-tasks-admin");
      setAllTasks(data.tasks);
    };

    getTasks();
  }, [axiosSecure]);
  // console.log(allTasks);
  const filterTasks = async (filterOption) => {
    let status;
    let priority;
    let filter;
    if (filterOption === "Default") {
      // filter = {};
      filter = "Default";
    } else if (filterOption === "To Do") {
      status = "To Do";
    } else if (filterOption === "In Progress") {
      status = "In Progress";
    } else if (filterOption === "Completed") {
      status = "Completed";
    } else if (filterOption === "low") {
      priority = "low";
    } else if (filterOption === "medium") {
      priority = "medium";
    } else if (filterOption === "high") {
      priority = "high";
    }
    // return filter;
    const response = await axiosSecure(
      `/filter-tasks?status=${status}&priority=${priority}&filter=${filter}`
    );
    console.log(response.data.filteredTask);
    setAllTasks(response?.data?.filteredTask);
  };
  return (
    <div className="relative flex  items-center w-[90%]  mx-auto h-[90%] flex-col bg-linear rounded-3xl shadow-2xl">
      <h1 className="text-center mt-6 text-3xl font-bold my-10 text-[#f5deb3]">
        All Task
      </h1>
      <div className="flex items-center left-10 top-10  absolute z-30">
        <input
          type="text"
          placeholder="Search User by Email "
          className="input_ w-full max-w-xs userName"
        />
        <button
          className="text-[#f5deb3] absolute right-3"
          onClick={async () => {
            const email = document.querySelector(".userName").value;
            // console.log(userName);
            const response = await axiosSecure(`/filter-tasks?email=${email}`);
            setAllTasks(response?.data?.filteredTask);
          }}
        >
          <IoSearch className="text-2xl" />
        </button>
      </div>
      <div className="w-full right-2 top-2  z-20 flex flex-col items-end justify-end absolute">
        <div className="flex gap-3 mt-10 mr-3">
          <h1 className="text-[#ffffff] font-bold text-xl mt-3">Filter by</h1>
          <ul className="menu bg-linear text-[#f5deb3] shadow-md rounded-box  ">
            <li>
              <button onClick={() => filterTasks("Default")}>Default</button>
            </li>
            <li>
              <details>
                <summary>Priority</summary>
                <ul>
                  <li>
                    <button onClick={() => filterTasks("low")}>Low</button>
                  </li>
                  <li>
                    <button onClick={() => filterTasks("medium")}>
                      Medium
                    </button>
                  </li>
                  <li>
                    <button onClick={() => filterTasks("high")}>High</button>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Status</summary>
                <ul>
                  <li>
                    <button onClick={() => filterTasks("To Do")}>To Do</button>
                  </li>
                  <li>
                    <button onClick={() => filterTasks("In Progress")}>
                      In Progress
                    </button>
                  </li>
                  <li>
                    <button onClick={() => filterTasks("Completed")}>
                      Completed
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-5 mt-10 w-full gap-6 px-10 overflow-y-auto h-[87%] max-h-[670px] ">
        {allTasks.length > 0 ? (
          allTasks.map((task) => <TaskCard key={task._id} task={task} />)
        ) : (
          <div className="text-center text-3xl text-[#f5deb3]">
            No tasks found!
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTasks;
