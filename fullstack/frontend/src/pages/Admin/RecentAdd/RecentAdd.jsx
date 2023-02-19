import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../RecentAdd/recentAdd.scss"
const RecentAdd = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>RecentAdd</title>
      </Helmet>
      <section className="recentAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="recentAdd_title">
                <h2>RecentAdd</h2>
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

export default RecentAdd;
