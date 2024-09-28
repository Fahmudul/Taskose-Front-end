import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const SignUp = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const userInfo = {
      username: form.get("username"),
      email: form.get("email"),
      password: form.get("password"),
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/sign-up`,
        userInfo
      );
      if (response?.data?.status === 200) {
        toast.success(response?.data?.message);
      }
      setTimeout(() => {
        window.location.href = "/sign-in";
      }, 1200);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="container_">
        <form className="form_" onSubmit={handleSignUp}>
          <p className="title_">Login Form</p>
          <input
            placeholder="Username"
            className="username input_"
            type="text"
            name="username"
          />
          <input
            placeholder="Email"
            name="email"
            className="username input_"
            type="email"
          />
          <input
            placeholder="Password"
            className="password input_"
            type="password"
            name="password"
          />
          <button className="btn_ py-2" type="submit">
            Sign Up
          </button>

          <div className="flex  my-6">
            <p className="text-[#9ca3af] mr-2">Already have an account?</p>
            <Link to="/sign-in" className="text-[#f5deb3] font-bold">
              Signin
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
