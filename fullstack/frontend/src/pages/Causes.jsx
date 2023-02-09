import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../pageStyle/causes.scss";
import Cause from "../components/home1/Cause";
const Causes = () => {
  return (
    <>
      <div className="causes_to">
        <Helmet>
          <title>Couses</title>
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="causesto_title">
                <h2>Causes</h2>
                <Link to="/home1">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cause/>
    </>
  );
};

export default Causes;
