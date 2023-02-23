import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/Home/Navbar";
import NavbarTop from "../layout/navbar/Home/NavbarTop";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

const MainRouter = () => {
  return (
    <div>
      <NavbarTop />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop/>
    </div>
  );
};

export default MainRouter;
