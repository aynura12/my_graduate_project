import React from "react";
import "../Admin/adminNavbar.scss"
const AdminHamburgerMenu = () => {
  return (
    <div>
      <div className="hamburger_admin_icon d-block w-0 h-0 px-3 py-2 d-lg-none ">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
};

export default AdminHamburgerMenu;
