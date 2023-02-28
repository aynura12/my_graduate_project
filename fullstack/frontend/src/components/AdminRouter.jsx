import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../layout/footer/Footer";
import AdminNavbar from "../layout/navbar/Admin/AdminNavbar";
import NavbarTop from "../layout/navbar/Home/NavbarTop";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import axios from "axios";
const getAuthToken = () => {
  const name = "token=";
  const cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
};

const tokenRequired = (setIsLogin) => {
  const token = getAuthToken();

  axios
    .post("http://127.0.0.1:8080/user/tokenRequired/", { token })
    .then((response) => {
      console.log(response.data);
      setIsLogin(true);
    })
    .catch((error) => {
      console.log(error);

      const url = window.location.href;
      const check_href = url.substring(url.lastIndexOf("/") + 1).toString();

      if (check_href !== "login" && check_href !== "register") {
        window.location.href = "/admin/login";
      }
    });
};

const AdminRouter = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    tokenRequired(setIsLogin);
  }, []);
  return (
    <>
      <NavbarTop />
      {isLogin && <AdminNavbar />}

      <Outlet />
      <ScrollToTop />
    </>
  );
};

export default AdminRouter;
