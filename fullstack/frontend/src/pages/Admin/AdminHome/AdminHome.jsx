import React from "react";
import { Helmet } from "react-helmet-async";
import "../AdminHome/adminHome.scss"
const AdminHome = () => {
  return (
    <>
      <Helmet>
        <title>Admin Home</title>
      </Helmet>
      <section className="adminHome">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="adminHome_title">
                <h2>Home</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="admin_home_area">
        <img src="http://layerdrops.com/oxpitan/images/section-icon.png" alt="img" />
        <h2>Welcome</h2></section>
    </>
  );
};

export default AdminHome;
