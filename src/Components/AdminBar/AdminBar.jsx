import { MdOutlineAnnouncement } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { BiSolidCoupon } from "react-icons/bi";
import { FaUsersLine } from "react-icons/fa6";
import { VscRequestChanges } from "react-icons/vsc";
const AdminBar = () => {
  return (
    <>
      <NavLink to="profileA">
        <span className="material-symbols-outlined">
          <RiProfileLine className="w-6 h-6" />
        </span>
        <p>My Profile</p>
      </NavLink>
      <NavLink to="statistics">
        <span>
          <MdOutlineAnnouncement className="w-6 h-6" />
        </span>
        <p>Make Announcement</p>
      </NavLink>

      <NavLink to="all-tasks">
        <span>
          <FaUsersLine className="w-6 h-6" />
        </span>
        <p>All Tasks</p>
      </NavLink>
    </>
  );
};

export default AdminBar;
