import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import App from "./App.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
