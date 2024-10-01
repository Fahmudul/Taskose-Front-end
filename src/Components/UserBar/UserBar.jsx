import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { BiSolidCoupon } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import useInfo from "../../Hooks/useInfo";
import { useContext } from "react";
import { UserAuthContext } from "../../UserContext/UserContext";
const AdminBar = () => {
  const { userInfo } = useContext(UserAuthContext);

  return (
    <>
     
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
