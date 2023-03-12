import "./Navbar.css";
import React from "react";
import Search from "../Search/Search";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
