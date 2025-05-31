// package import.
import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";

// components import.
import { Footer, Login, Navbar, Register } from "./components";

// context import.
import { useAppContext } from "./contexts/AppContext";

// pages import.
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

// App component to manage the main application structure and routing.
const App = () => {
  // useing the context
  const {
    showUserLogin,
    formType,
    setFormType,
    setShowUserLogin,
    formRef,
    currentUser,
  } = useAppContext();

  // useEffect to handle clicks outside the login/register form to close it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowUserLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // rendering the App component.
  return (
    <>
      <div>
        {showUserLogin && formType === "Login" && (
          <Login switchToRegister={() => setFormType("Register")} />
        )}
        {showUserLogin && formType === "Register" && (
          <Register switchToLogin={() => setFormType("Login")} />
        )}
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16">
        <Navbar />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Exporting the App component as default.
export default App;
