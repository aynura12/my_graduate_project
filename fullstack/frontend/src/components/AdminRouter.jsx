import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Navbar2 from "../layout/navbar/Navbar2";
const AdminRouter = () => {
  return (
    <>
      {" "}
      <Navbar2/>
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminRouter;
