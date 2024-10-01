import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { MdAssignmentAdd } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router";
const ModelBtn = ({ user }) => {
  // let userId = user._id;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleAssignTask = (email) => {
    navigate(`/dashboard/create-task?email=${email}`);
    setOpen(false);
  };
  return (
    <div className={`${user.role === "Admin" ? "hidden" : "block"}`}>
      <button
        onClick={() => {
          // userId = user._id;
          setOpen(true);
          // console.log(user._id);
        }}
        style={{ background: "none", border: "none" }}
      >
        <BsThreeDotsVertical className="text-lg hover:text-xl transition-all duration-300 hover:text-[#f5deb3]" />
      </button>

      {open && (
        <div className="modal-box bg-linear absolute top-0 right-0 w-">
          <div className="w-full flex justify-end mb-6">
            <button
              type="button"
              className="bg-transparent  border-[#f5deb3] text-[#9ca3af]"
              onClick={() => {
                setOpen(false);
                // console.log(user._id);
              }}
            >
              <RiCloseLine className="text-3xl hover:text-[#f5deb3] hover:scale-105 transition-all duration-300" />
            </button>
          </div>
          <ul className="flex  gap-3 justify-between">
            <li className="bg-black/30 p-[10px] shadow-md active:scale-95 rounded-2xl">
              <button
                style={{ background: "none" }}
                className="flex items-center gap-2  text-base"
                title="Delete"
              >
                <RiDeleteBin7Line className="text-red-500 text-4xl hover:text-red-600 hover:scale-105 transition-all duration-300" />
                Delete
              </button>
            </li>
            <li className="bg-black/30 p-[10px] shadow-md active:scale-95 rounded-2xl">
              <button
                style={{ background: "none" }}
                className="flex items-center gap-2  text-base"
                title="Generate Report"
              >
                <GoGraph className="text-green-500 text-4xl hover:text-green-600 hover:scale-105 transition-all duration-300" />
                Report
              </button>
            </li>
            <li className="bg-black/30 p-[10px] shadow-md active:scale-95 rounded-2xl">
              <button
                style={{ background: "none" }}
                className="flex items-center gap-2  text-base"
                title="Assign Task"
                onClick={() => handleAssignTask(user.email)}
              >
                <MdAssignmentAdd className="text-blue-500 text-4xl hover:text-blue-600 hover:scale-105 transition-all duration-300" />
                Assign Task
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModelBtn;
