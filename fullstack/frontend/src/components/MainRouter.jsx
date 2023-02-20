import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/Navbar";
import NavbarTop from "../layout/navbar/NavbarTop";

const MainRouter = () => {
  return (
    <div>
      <NavbarTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainRouter;
