import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const SignIn = () => {
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const userInfo = {
      email: form.get("email"),
      password: form.get("password"),
    };

    console.log(userInfo);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/sign-in`,
        userInfo
      );
      console.log(response.data);
      if (response?.data?.status === 200) {
        localStorage.setItem("token", response?.data?.token);
        window.location.href = "/dashboard";
      }
      // setTimeout(() => {
      //   window.location.href = "/sign-in";
      // }, 1200);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="container_">
        <form className="form_" onSubmit={handleSignIn}>
          <p className="title_">Login Form</p>
          <input
            placeholder="Email"
            className="username input_"
            type="text"
            name="email"
          />
          <input
            placeholder="Password"
            className="password input_"
            type="password"
            name="password"
          />
          <button className="btn_ py-2" type="submit">
            Login
          </button>
          <div className="flex  my-6">
            <p className="text-[#9ca3af] mr-2">Don{"'"}t have an account?</p>
            <Link to="/sign-up" className="text-[#f5deb3] font-bold">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
