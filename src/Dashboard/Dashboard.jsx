import { useContext, useEffect, useState } from "react";
// import useAdmin from "../../Hooks/useAdmin/useAdmin";
// import "./Dashboard.css";
import { RiMenu2Fill, RiProfileLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { RiHome3Line } from "react-icons/ri";
import UserBar from "../Components/UserBar/UserBar";
import "../index.css";
// import AdminBar from "../../Components/AdminBar/AdminBar";
import AdminBar from "../Components/AdminBar/AdminBar";
// import UserBar from "../../Components/UserBar/UserBar";
// import MemberBar from "../../Components/MemberBar/MemberBar";
import { NavLink, Outlet } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import useInfo from "../Hooks/useInfo";
import { UserAuthContext } from "../UserContext/UserContext";
import { CgProfile } from "react-icons/cg";
// import { RxExit } from "react-icons/rx";
// import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
const Dashboard = () => {
  // const { SignOut } = useAuthInfo();
  const { userInfo, logout } = useContext(UserAuthContext);
  console.log(userInfo);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="main-screen bgColor flex min-w-screen min-h-screen ">
      <div className="relative">
        <section className="page sidebar-2-page">
          <aside className={`sidebar-2 ${isOpen ? "open" : ""} h-screen`}>
            <div className="inner h-screen">
              <header>
                <button
                  type="button"
                  className="sidebar-2-burger"
                  onClick={() => setIsOpen(!isOpen)}
                  id="openSidebarBtn"
                >
                  <span className="material-symbols-outlined">
                    {isOpen ? (
                      <IoCloseSharp className="w-8 h-8" />
                    ) : (
                      <RiMenu2Fill className="w-6 h-6" />
                    )}
                  </span>
                </button>
                <h1
                  className="text-white text-2xl italic font-semibold tracking-widest pl-3 w-full"
                  // style={{ border: "1px solid red" }}
                >
                  Taskose
                </h1>
              </header>
              <nav>
                {userInfo?.role === "Admin" && <AdminBar />}
                {userInfo?.role === "User" && <UserBar />}
                <>
                  {" "}
                  <NavLink to="/" className="absolute bottom-14">
                    <span className="material-symbols-outlined">
                      <CgProfile className="w-6 h-6" />
                    </span>
                    <p>{userInfo?.userName}</p>
                  </NavLink>
                  <button
                    className="absolute bottom-2"
                    id="logoutBtn"
                    onClick={() => logout()}
                  >
                    <span className="">
                      <RxExit className="w-6 h-6" />
                    </span>
                    <p>Logout</p>
                  </button>
                </>
              </nav>
            </div>
          </aside>
        </section>
      </div>
      <div
        className="bgColor flex-1 flex items-center"
        style={{ width: "85%" }}
      >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
