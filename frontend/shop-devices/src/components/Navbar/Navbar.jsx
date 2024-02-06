import React, { useState } from "react";
import "./Navbar.css";
import brand_logo from "../Assets/shopper_brand.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const Navbar = () => {
  const [menu, setMenu] = useState("mobiles");

  return (
    <nav className="navbar fixed-top bg-light">
      <div className="container mx-auto flex items-center justify-between py-2">
        {/* Show the brand logo and hide the text for screen sizes less than 425 pixels */}
        <Link
          to="/dashboard"
          className="navbar-brand flex items-center text-lg md:text-xl lg:text-2xl"
        >
          <img
            src={brand_logo}
            alt="Logo"
            width="40"
            height="32"
            className="d-inline-block align-text-top mr-2"
          />
          <span className="hidden md:inline">SHOP SMARTDEVICES</span>
        </Link>

        <ul className="navbar-nav flex space-x-12 items-center">
          <NavItem
            to="dashboard/mobiles"
            active={menu === "mobiles"}
            setMenu={setMenu}
            label="Mobiles"
          />
          <NavItem
            to="dashboard/laptops"
            active={menu === "laptops"}
            setMenu={setMenu}
            label="Laptops"
          />
          <NavItem
            to="dashboard/watches"
            active={menu === "watches"}
            setMenu={setMenu}
            label="Watches"
          />
        </ul>

        <div className="nav-login-cart flex items-center relative">
          {/* Make the cart icon smaller for screens less than or equal to 425 pixels */}
          <img
            src={cart_icon}
            alt="cart-icon"
            className="mr-1 text-xs md:text-sm lg:text-base"
          />
          <div className="nav-cart-count text-xs md:text-sm lg:text-base absolute top-0 right-0 bg-red-500 text-white rounded-full px-2">
            0
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
