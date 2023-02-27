import React, { useEffect,useState } from "react";
import { Helmet } from "react-helmet-async";
import { mainContext } from "../Context/ContextProvider";
import { useContext } from "react";
import axios from "axios";

import "../style/login.scss";
import { Link } from "react-router-dom";
const Register = () => {
  const { ToTop } = useContext(mainContext);
  useEffect(() => {
    ToTop()
  }, []);



  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      window.alert("Confirm password doesn't match password");
      return;
    }

    axios
      .post("http://127.0.0.1:3070/register/", {
        username,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        console.log("success", response);
        document.cookie = `token=${response.data.token}; expires=${new Date(
          Date.now() + 36000000
        ).toUTCString()}; path=/`;
        window.location.href = "/admin";

        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        console.log("catch", error);
      });
    window.alert("success register");
  };

  return (
    <>
      <div className="login">
        {" "}
        <Helmet>
          <title>Register</title>
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="login_title">
                <h2>Register</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
      <div className="login__wrapper">
      <div style={{ width: "20%", textAlign: "center" }}>
      <div> <img src="http://layerdrops.com/oxpitan/images/section-icon.png" alt="" /></div>
        <h2 style={{ color: "#e36955", marginBottom: "30px" }}>Register</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            className="login-inp"
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-inp"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-inp"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="login-inp"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="login-button" type="submit">
            Sign in
          </button>
          <div>
          <Link className="login-links" to="/login">
           Login
            </Link>
            
          </div>
        </form>
      </div>
    </div>
      </section>
    </>
  );
};

export default Register;
