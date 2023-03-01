import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/password.scss";
import { mainContext } from "../Context/ContextProvider";
import { useContext,useEffect } from "react";
const Password = () => {
    const { ToTop } = useContext(mainContext);
  useEffect(() => {
    ToTop();
  }, []);
  const[email,setEmail]=useState({})
  useEffect(()=>{
    localStorage.setItem("email", JSON.stringify(email))
  },[email])
  return (
    <div id="home_password">
      <div>
      <div> <img src="http://layerdrops.com/oxpitan/images/section-icon.png" alt="" /></div>
        <h2 style={{ color: "#e36955", marginBottom: "30px" }}>Forgot Password?</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit = {(e) => e.preventDefault()}>
          <div>
            <input className="pass_input" type="email" placeholder="Email"value={email}
        onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button className="pass_button" type="submit" value="Submit">Send to Email</button>
        </form>
        <Link to="/login" className="pass_back">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default Password;
