import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Admin/adminNavbar.scss"
import AdminHamburgerMenu from "./AdminHamburgerMenu";
const Navbar2 = () => {
  const [isNavbarSmall, setIsNavbarSmall] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsNavbarSmall(false);
    } else {
      setIsNavbarSmall(true);
    }
  };
  return (
    <nav
      className={`admin_navbar ${
        isNavbarSmall ? "admin-large" : "admin-small"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-5 justify-content-start align-items-center d-block d-md-flex">
            <img
              src="http://layerdrops.com/oxpitan/images/logo.png"
              alt="img"
            />
          </div>
          <div className="col-lg-7 col-7 d-flex justify-content-end align-items-center">
            <ul
              style={{ display: "flex" }}
              className="admin_lists d-none d-lg-flex justify-content-end"
            >
              <li>
                <Link to="/admin" id="admin_link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="causeAdd" id="admin_link">
                  Cause
                </Link>
              </li>
              <li>
                <Link to="eventAdd" id="admin_link">
                  Event
                </Link>
              </li>
              <li>
                <Link to="galleryAdd" id="admin_link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="newsAdd" id="admin_link">
                  News
                </Link>
              </li>
              <li>
                <Link to="readAdd" id="admin_link">
                  Read
                </Link>
              </li>
              <li>
                <Link to="recentAdd" id="admin_link">
                  Recent
                </Link>
              </li>
              <li>
                <Link to="teamAdd" id="admin_link">
                  Team
                </Link>
              </li>
              <li>
                <Link to="volunteerAdd" id="admin_link">
                  Volunteer
                </Link>
              </li>
            </ul>
            <AdminHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
