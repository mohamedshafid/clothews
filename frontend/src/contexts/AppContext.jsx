// package import.
import { createContext, useContext, useRef, useState } from "react";

// exporting AppContext to provide application-wide state management.
export const AppContext = createContext();

// AppProvider component to manage application state and provide context to child components.
export const AppProvider = ({ children }) => {
  // State variables to manage user login, form type, cart, and current user.
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [formType, setFormType] = useState("Login");
  const formRef = useRef(null);
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  //   value object to hold the state variables and functions to be provided to child components.
  const value = {
    showUserLogin,
    setShowUserLogin,
    formType,
    setFormType,
    formRef,
    cart,
    setCart,
    currentUser,
    setCurrentUser,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// useAppContext hook to access the AppContext values in child components.
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
