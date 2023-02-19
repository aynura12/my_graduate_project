import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../EventAdd/eventAdd.scss"
const EventAdd = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>EventAdd</title>
      </Helmet>
      <section className="eventAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="eventAdd_title">
                <h2>EventAdd</h2>
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

export default EventAdd;
