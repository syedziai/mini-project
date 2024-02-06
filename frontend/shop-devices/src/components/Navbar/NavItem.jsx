import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, menu, setMenu, label }) => {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={`navbar-brand ${
          menu === label.toLowerCase() ? "active" : ""
        }`}
        style={{
          fontSize: "0.75rem", // Set a smaller font size for smaller screens
          marginRight: "0.5rem",
          padding: "0.25rem 0.5rem",
        }}
        onClick={() => setMenu(label.toLowerCase())}
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavItem;
