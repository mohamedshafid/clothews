// package import.
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

// icons import.
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

// local import.
import { useAppContext } from "../contexts/AppContext";

// Register component to handle user registration functionality.
const Register = ({ switchToLogin }) => {
  // Using context to access form reference and user state.
  const { setShowUserLogin, setCurrentUser, formRef } = useAppContext();

  // State to manage user credentials.
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  //   handleSubmit function to handle form submission for user registration.
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/sign-up",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response indicates success or failure.
      if (!response.data.success) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        setCurrentUser(response.data.user);
      }
    } catch (err) {
      toast.error("Something went wrong, please try again later.");
    }

    setUser({ name: "", email: "", password: "" });
    formRef.current.reset();
    setShowUserLogin(false);
  };
  // Render the Register component.
  return (
    <section className="w-full h-screen flex justify-center items-center bg-black/50 text-white absolute top-0 left-0 z-100">
      <div className="bg-white text-black p-5 rounded-xl max-w-[500px] w-full">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
            Create an Account
          </h1>
          <a href="" className="underline font-medium">
            Forgot Password
          </a>
        </div>
        <form onSubmit={handleSubmit} className="mt-5" ref={formRef}>
          <div className="mb-4">
            <label htmlFor="name">Username</label>
            <br />
            <div className="relative flex items-center">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded-full border"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                value={user.name}
              />
              <FaUser className="absolute right-5 " />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <br />
            <div className="relative flex items-center">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-full border"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
              />
              <MdOutlineMailOutline className="absolute right-5 " />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <br />
            <div className="relative flex items-center">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-full border"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
              />
              <TbPasswordUser className="absolute right-5 " />
            </div>
          </div>
          <div className="flex flex-row gap-2 mb-4">
            <p>Already have an Account ?</p>
            <p className="font-bold cursor-pointer" onClick={switchToLogin}>
              SignIn
            </p>
          </div>
          <button
            className="w-full bg-black text-white p-3 rounded-full font-bold cursor-pointer bg-gradient-to-r from-black to-gray-800"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

// Exporting the Register component as default.
export default Register;
