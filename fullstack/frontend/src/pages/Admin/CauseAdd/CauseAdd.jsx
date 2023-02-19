import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../CauseAdd/causeAdd.scss";

const CauseAdd = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>CauseAdd</title>
      </Helmet>
      <section className="causeAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="causeAdd_title">
                <h2>CauseAdd</h2>
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

export default CauseAdd;
