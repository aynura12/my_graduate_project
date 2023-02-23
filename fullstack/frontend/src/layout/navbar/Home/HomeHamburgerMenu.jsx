import React from "react";
import { Link } from "react-router-dom";
import "../Home/navbar.scss";

const HomeHamburgerMenu = () => {
  return (
    <div>
      <div
        className="hamburger_icon d-block w-0 h-0 px-3 py-2 d-lg-none "
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default HomeHamburgerMenu;
