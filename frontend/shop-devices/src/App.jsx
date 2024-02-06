import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Laptops from "./components/Laptops";
import Mobiles from "./components/Mobiles";
import Watches from "./components/Watches";
import LoginError from "./components/LoginError";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route path="dashboard/laptops" element={<Laptops></Laptops>}></Route>
          <Route path="dashboard/mobiles" element={<Mobiles></Mobiles>}></Route>
          <Route path="dashboard/watches" element={<Watches></Watches>}></Route>
        </Route>
        <Route path="/error" element={<LoginError></LoginError>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
