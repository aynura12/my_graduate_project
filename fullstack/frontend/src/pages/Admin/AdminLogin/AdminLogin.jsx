import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../AdminReg/adminReg.scss";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     axios.post('http://127.0.0.1:3070/login/', { email, password })
  //         .then((response) => {

  //             console.log("succcess", response)
  //             document.cookie = `token=${response.data.token}; expires=${new Date(Date.now() + 36000000).toUTCString()}; path=/`;
  //             window.location.href = '/admin';
  //             setEmail('');
  //             setPassword('');

  //         })
  //         .catch((error) => {
  //             console.log("catch", error)
  //         });
  //     window.alert("success login")
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      window.alert("Please fill in all fields and login or sign up.");
      return;
    }
    axios
      .post("http://127.0.0.1:3070/login/", { email, password })
      .then((response) => {
        console.log("success", response);
        document.cookie = `token=${response.data.token}; expires=${new Date(
          Date.now() + 36000000
        ).toUTCString()}; path=/`;
        window.location.href = "/admin";
        setEmail("");
        setPassword("");
        window.alert("Success login");
      })
      .catch((error) => {
        console.log("catch", error);
        window.alert("Don't find such account.");
      });
  };

  return (
    <div className="admin-login__wrapper">
      <div style={{ width: "20%", textAlign: "center" }}>
        <div> <img src="http://layerdrops.com/oxpitan/images/section-icon.png" alt="" /></div>
        <h3 style={{ color: "#e36955", marginBottom: "30px" }}>ADMIN LOGIN</h3>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div>
            {" "}
            <input
              className="login-inp"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <input
              className="login-inp"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-button" type="submit">
            Log in
          </button>
          <div className="d-flex justify-content-around">
            <Link className="login-links" to="/admin/password">
              Forgot password?
            </Link>
           
            <Link className="login-links" to="/admin/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
