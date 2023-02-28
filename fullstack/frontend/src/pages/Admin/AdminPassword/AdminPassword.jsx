
import React from "react";
import { Link } from "react-router-dom";
import "../../../style/password.scss";
import { mainContext } from "../../../Context/ContextProvider";
import { useContext,useEffect } from "react";
const AdminPassword = () => {
    const { ToTop } = useContext(mainContext);
    useEffect(() => {
      ToTop();
    }, []);
    return (
      <div id="home_password">
        <div>
        <div> <img src="http://layerdrops.com/oxpitan/images/section-icon.png" alt="" /></div>
          <h2 style={{ color: "#e36955", marginBottom: "30px" }}>Forgot Password?</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <input className="pass_input" type="email" placeholder="Email" />
            </div>
            <button className="pass_button">Send to Email</button>
          </form>
          <Link to="/admin/login" className="pass_back">
            Back to Login
          </Link>
        </div>
      </div>
    );
}

export default AdminPassword