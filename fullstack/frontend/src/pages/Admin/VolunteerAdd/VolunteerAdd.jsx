import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../VolunteerAdd/volunteerAdd.scss"
const VolunteerAdd = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>VolunteerAdd</title>
      </Helmet>
      <section className="volunteerAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="volunteerAdd_title">
                <h2>VolunteerAdd</h2>
                <Link to="/admin">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerAdd;
