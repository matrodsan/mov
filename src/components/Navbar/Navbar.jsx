import "./Navbar.css";
import React from "react";
import Search from "../Search/Search";
import logo from "../../assets/logo.png";
import { BiCameraMovie, BiTv } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="links">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <a href="/movies">
            <BiCameraMovie /> Movies
          </a>
          <a href="/tvshows">
            <BiTv /> TV Shows</a>
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
