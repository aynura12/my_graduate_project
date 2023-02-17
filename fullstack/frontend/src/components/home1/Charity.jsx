import React from "react";
import "../home1/charity.scss";
const Charity = () => {
  return (
    <div className="charity">
    <div className="container">
        <div className="row g-0">
          <div className="col-lg-6 col-md-12">
            <div className="charity_left">
              <div className="charity_left_icon">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div>
                <h3>
                  <span>785000</span>
                </h3>
                <p>raised by 6,388 people in 7 days</p>
              </div>
            </div>
            <div className="charity_left">
              <div className="charity_left_icon">
                <i className="fa-solid fa-hands-holding-child"></i>
              </div>
              <div>
                <h3>
                  <span>63000</span>
                </h3>
                <p>volunteer are available to help you</p>
              </div>
            </div>
          </div>
          <div className="charity_right col-lg-6 col-md-12">
            <h3>" Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.</h3>
            <p className="charity_right_text">Martin Luther King, jr</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Charity;
