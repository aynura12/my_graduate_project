import React from "react";
import { Helmet } from "react-helmet-async";
import Volunteers from "../components/home1/Volunteers";
import { Link } from "react-router-dom";
import "../pageStyle/ourteam.scss"
const OurTeam = () => {
  return (
    <>
      <div className="ourteam">
        <Helmet>
          <title>Our Team</title>
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ourteam_title">
                <h2> Our Team</h2>
                <Link to="/home1">
                  <button>Our Team</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Volunteers/>
    </>
  );
};

export default OurTeam;
