import React from "react";
import useInfo from "../../Hooks/useInfo";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const TaskCard = ({ task, handleDelete }) => {
  const { taskTitle, taskDescription, dueDate, priority, assignedTo } = task;
  const navigate = useNavigate();
  const userInfo = useInfo();

  const handleEdit = () => {
    navigate(`/dashboard/update-task/${task._id}`);
  };

  return (
    <div className="_card_ py-2 px-2">
      <div className="_img_"></div>
      <span className="text-xl font-semibold mb-2">{taskTitle}</span>
      <p className="_info_ text-gray-400 text-sm mb-4">
        {taskDescription.slice(0, 60)}...
      </p>
      <div className="flex justify-between ">
        <span className="_info_ text-sm mb-2  w-full">
          Due Date{" "}
          <p className="font-bold text-[#f5deb3] text-lg ">
            {dueDate?.split("T")[0]}
          </p>
        </span>
        <span className="_info_ text-sm mb-2  ">
          Prioroty{" "}
          <p className="font-bold text-[#f5deb3] text-lg">{priority}</p>
        </span>
      </div>
      <span>Status: {assignedTo[0]?.status}</span>
      <div className="flex text-[#f5deb3] w-full justify-between px-8 mt-3">
        <button onClick={() => handleDelete(task._id)}>
          <AiOutlineDelete className="w-8 h-8 text-yellow-400 hover:text-yellow-300" />
        </button>
        <button onClick={handleEdit}>
          <FaRegEdit className="w-8 h-8 text-yellow-400 hover:text-yellow-300" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
