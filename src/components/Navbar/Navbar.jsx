import "./Navbar.css";
import React from "react";
import Search from "../Search/Search";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <img src={logo} alt="logo" />
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
