import React, { useContext } from "react";
import useInfo from "../../Hooks/useInfo";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { UserAuthContext } from "../../UserContext/UserContext";
const TaskCard = ({ task, handleDelete }) => {
  const { taskTitle, taskDescription, dueDate, priority, assignedTo } = task;
  const navigate = useNavigate();
  const { userInfo } = useContext(UserAuthContext);
  const handleEdit = () => {
    navigate(`/dashboard/update-task/${task._id}`);
  };

  return (
    <div
      className={`_card_  ${
        userInfo.role !== "Admin" ? "p-3 h-[340px]" : "py-2 px-2 h-[408px]"
      }`}
    >
      <div className="_img_"></div>
      <span className="text-xl font-semibold mb-2 text-[#f5deb3]">
        {taskTitle}
      </span>
      <p className="_info_ text-gray-400 text-sm mb-4">
        {taskDescription.slice(0, 60)}...
      </p>
      <div className="flex justify-between ">
        <span className="_info_ text-sm mb-2  w-full text-gray-400">
          Due Date{" "}
          <p className="font-bold text-[#f5deb3] text-lg ">
            {dueDate?.split("T")[0]}
          </p>
        </span>
        <span className="_info_ text-sm mb-2  text-gray-400">
          Prioroty{" "}
          <p className="font-bold text-[#f5deb3] text-lg">{priority}</p>
        </span>
      </div>
      <span
        className={`${
          userInfo?.role === "Admin" ? "block" : "hidden"
        } text-gray-400`}
      >
        Assigned To: {assignedTo[0]?.email}
      </span>
      <span className="text-[#f5deb3]">
        Status:{" "}
        <span
          className={`${
            assignedTo[0]?.status === "To Do"
              ? "text-[#B0BEC5]"
              : assignedTo[0]?.status === "In Progress"
              ? "text-[#42A5F5]"
              : "text-[#66BB6A]"
          } `}
        >
          {assignedTo[0]?.status}
        </span>
      </span>
      <div className="flex text-[#f5deb3] w-full justify-between px-8 mt-3">
        <button
          onClick={() => handleDelete(task._id)}
          disabled={userInfo?.role === "Admin" ? true : false}
        >
          <AiOutlineDelete
            className={`w-8 h-8 text-yellow-400 hover:text-yellow-300 ${
              userInfo?.role === "Admin" ? "cursor-not-allowed" : ""
            }`}
          />
        </button>
        <button
          onClick={handleEdit}
          disabled={userInfo?.role === "Admin" ? true : false}
        >
          <FaRegEdit
            className={`w-8 h-8 text-yellow-400 hover:text-yellow-300 ${
              userInfo?.role === "Admin" ? "cursor-not-allowed" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
