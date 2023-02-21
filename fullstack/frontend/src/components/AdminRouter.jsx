import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import AdminNavbar from "../layout/navbar/AdminNavbar"

const AdminRouter = () => {
  return (
    <>
     
    <AdminNavbar/>
      <Outlet />
      <Footer />
   
    </>
  );
};

export default AdminRouter;
