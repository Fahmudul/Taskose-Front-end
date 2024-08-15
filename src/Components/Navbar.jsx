import React from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Navbar = () => {
  const currentPath = window.location.pathname;
  const NavItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Store Locator",
      link: "/store-locator",
    },
    {
      name: "Track Your Order",
      link: "/track-your-order",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <div className="lg:mt-5">
      <nav className="lg:flex justify-between hidden">
        <h1 className="text-secondary text-xl">
          Welcome to Worldwide Electronics Store
        </h1>
        <div className="flex gap-4">
          <ul className="flex gap-3">
            {NavItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  className={
                    currentPath === item.link
                      ? "text-secondary font-bold"
                      : "before:[content-'']  before:w-0 relative before:absolute   before:hover:w-[60%] before:transition-all before:duration-500   before:bg-secondary before:h-[2px] before:-bottom-2"
                  }
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button>Sign In</button>
        </div>
      </nav>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full flex items-center bg-primary lg:bg-transparent">
            <div className="flex-none lg:hidden relative top-[3px]">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex w-full items-center justify-between pr-3">
              <div className=" flex-1 text-3xl lg:text-5xl font-bold">
                electro <span className="text-primary">.</span>
              </div>
              <div className=" flex lg:hidden space-x-2 [&>li]:list-none items-center">
                <li>
                  <CiSearch className="text-2xl" />
                </li>
                <li>
                  <Link to="">
                    <AiOutlineUser className="text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <HiOutlineShoppingBag className="text-2xl" />
                  </Link>
                </li>
              </div>
            </div>
          </div>
          {/* Page content here */}
          Content
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
