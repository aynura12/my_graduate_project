import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import AdminNavbar from "../layout/navbar/AdminNavbar";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

const AdminRouter = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AdminRouter;
