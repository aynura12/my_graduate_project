import React from "react";
import { Link } from "react-router-dom";
import "../style/notFound.scss";
const NotFound = () => {
  return (
    <div id="notfound">
      <div className="container">
        <div className="row">
          <div className="notfound_area col-lg-12 col-md-12">
            <div>
              {" "}
              <img
                src="https://cdn2.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg"
                alt=""
              />
            </div>
            <h2>
              We searched the space, but we couldn't find the page you're
              looking for
            </h2>
            <Link to="/">
              {" "}
              <button>Back Home</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
