// package import.
import { createRoot } from "react-dom/client";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
// css import.
import "./index.css";
// App import.
import App from "./App.jsx";
// Context provider import.
import { AppProvider } from "./contexts/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
    <Toaster />
  </BrowserRouter>
);
