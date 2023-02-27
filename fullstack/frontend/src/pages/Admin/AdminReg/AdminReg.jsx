import React, { useState } from "react";
import axios from "axios";
import "../AdminReg/adminReg.scss";
import { Link } from "react-router-dom";
const AdminReg = () => {
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
    <div className="admin-login__wrapper">
      <div style={{ width: "20%", textAlign: "center" }}>
      <div> <img src="http://layerdrops.com/oxpitan/images/section-icon.png" alt="" /></div>
        <h2 style={{ color: "#e36955", marginBottom: "30px" }}>Admin Register</h2>
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
          <Link className="login-links" to="/admin/login">
           Login
            </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminReg;
