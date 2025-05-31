// package import.
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// icons import.
import { FaShoppingCart } from "react-icons/fa";

// local import.
import { useAppContext } from "../contexts/AppContext";

// Navbar component to display the navigation bar of the application.
const Navbar = () => {
  // State to manage the active link in the navigation bar.
  const navigate = useNavigate();
  // Using context to access application state and functions.

  const { setShowUserLogin, cart, currentUser, setCurrentUser } =
    useAppContext();

  // State to manage the active link in the navigation bar.
  const [active, setActive] = useState("Home");

  // Function to handle user sign out.
  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
    toast.success("Sign out successfully");
    window.location.reload();
  };

  // Render the Navbar component.
  return (
    <nav className="flex flex-row justify-between items-center text-white p-4 mt-2 rounded-full z-10 bg-gradient-to-r from-black to-gray-800">
      <Link to="/">
        <h1 className="font-bold text-4xl italic">
          Cloth<span>e</span>ws
        </h1>
      </Link>
      <ul className="flex flex-row gap-4 italic text-[17px]">
        <li
          onClick={() => setActive("Home")}
          className={`${
            active === "Home" ? "text-gray-500 font-bold text-2xl" : ""
          }`}
        >
          <a href="#home">Home</a>
        </li>
        <li
          onClick={() => setActive("Products")}
          className={`${
            active === "Products" ? "text-gray-500 font-bold text-2xl" : ""
          }`}
        >
          <a href="#products">All Products</a>
        </li>
        <li
          onClick={() => setActive("Contacts")}
          className={`${
            active === "Contacts" ? "text-gray-500 font-bold text-2xl" : ""
          }`}
        >
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="flex flex-row gap-5 items-center">
        <span className="relative cursor-pointer">
          <FaShoppingCart size={30} onClick={() => navigate("/cart")} />
          {cart.length > 0 && (
            <div className="bg-red-600 w-2 h-2 rounded-full absolute -right-2 -top-1" />
          )}
        </span>
        {currentUser?.name ? (
          <div className="relative group cursor-pointer">
            <span className="font-bold bg-white text-black px-4 py-3 rounded-full cursor-pointer">
              {currentUser?.name[0]}
            </span>
            <ul className="absolute bg-white text-black rounded-lg shadow-lg  hidden group-hover:block z-100 p-4 mt-2 w-[100px] -right-12">
              <li className="text-md font-bold">My Orders</li>
              <hr />
              <li className="text-md font-bold">
                <button
                  className="bg-gradient-to-r from-black to-gray-800  py-1 rounded-xl text-white w-full  mt-2 cursor-pointer"
                  onClick={() => handleSignOut()}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="bg-white text-black px-4 py-2 rounded-full italic cursor-pointer font-bold"
            onClick={() => setShowUserLogin(true)}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

// Exporting the Navbar component as default.
export default Navbar;
