import { MdOutlineAnnouncement } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { BiSolidCoupon } from "react-icons/bi";
import { FaUsersLine } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
const AdminBar = () => {
  return (
    <>
      <NavLink to="statistics">
        <span>
          <ImStatsBars className="w-6 h-6" />
        </span>
        <p>Statistics</p>
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
