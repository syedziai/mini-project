import React from "react";
import Navbar from "./Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <br />
      <br />
      <Outlet></Outlet>
    </>
  );
};

export default Dashboard;
