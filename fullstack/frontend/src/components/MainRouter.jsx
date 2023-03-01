import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Navbar from "../layout/navbar/Home/Navbar";
import NavbarTop from "../layout/navbar/Home/NavbarTop";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import SquareLoader from "react-spinners/SquareLoader";
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

      // if (check_href !== "user-login" && check_href !== "user-register") {
      //   // window.location.href = "/user-login";
      // }
    });
};

const MainRouter = () => {
  useEffect(() => {
    tokenRequired();
  }, []);
  const override= {
    display: "flex",
    justifyContent:"center",
    margin: "0 auto",
    margintOP:"10%"
  };
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"270px"}}> <SquareLoader     color={"orange"}    cssOverride={override} loading={loading} size={40}    /></div>
       
      ) : (
        <div>
          {" "}
          <NavbarTop />
          <Navbar />
          <Outlet />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
};

export default MainRouter;
