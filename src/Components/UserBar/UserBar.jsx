import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { BiSolidCoupon } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import useInfo from "../../Hooks/useInfo";
const AdminBar = () => {
  const userInfo = useInfo();
  return (
    <>
      <NavLink to="profile">
        <span className="material-symbols-outlined">
          <CgProfile className="w-6 h-6" />
        </span>
        <p>My Profile</p>
      </NavLink>
      <NavLink to="create-task">
        <span>
          <IoCreateOutline className="w-6 h-6" />
        </span>
        <p>Create Task</p>
      </NavLink>
      <NavLink to="all-task">
        <span>
          <FaTasks className="w-6 h-6" />
        </span>
        <p>{userInfo?.data?.role === "Admin" ? "All tasks" : "My tasks"}</p>
      </NavLink>
    </>
  );
};

export default AdminBar;
