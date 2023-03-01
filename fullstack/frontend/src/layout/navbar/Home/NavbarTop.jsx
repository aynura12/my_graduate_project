import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Home/navbar.scss";
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
      //   window.location.href = "/user-login";
      // }
    });
};

const logOut = () => {
  document.cookie = `token=; expires=${new Date(
    Date.now() - 100000000
  ).toUTCString()}; path=/`;

  window.location.reload();
};

const NavbarTop = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    tokenRequired(setIsLogin);
  }, []);

  return (
    <>
      <div className="navbar_top">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12 d-flex d-md-block justify-content-center">
              <ul className="lists navbar-left-list">
                <li className="list">
                  <a href="/" className="link">
                    <div className="navbar_top_left">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    needhelp@oxpitan.com
                  </a>
                </li>
                <li className="list ">
                  <a href="/" className="link d-block ms-3">
                    <i className="fa-solid fa-phone telephone"></i> 666 888 0
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-sm-12 d-flex d-md-block justify-content-center">
              <ul className="lists navbar-right-list">
                {!isLogin ? (
                  <>
                    <li className="list">
                      <Link to="user-login" className="link">
                        Login
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="user-register" className="link">
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <li
                    className="list"
                    onClick={() => logOut()}
                    style={{ cursor: "pointer" }}
                  >
                    Log out
                  </li>
                )}
                <li className="list">
                  <a
                    href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                    className="link"
                  >
                    <div>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                  </a>
                </li>
                <li className="list">
                  <a href="https://www.facebook.com/" className="link">
                    <div>
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                  </a>
                </li>
                <li className="list">
                  <a href="https://www.pinterest.com/login/" className="link">
                    <div>
                      <i className="fa-brands fa-pinterest"></i>
                    </div>
                  </a>
                </li>
                <li className="list">
                  <a href="https://www.instagram.com/" className="link">
                    <div>
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
