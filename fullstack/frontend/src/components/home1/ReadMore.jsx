import React from "react";
import { Link } from "react-router-dom";
import "../home1/readmore.scss";
const ReadMore = () => {
  return (
    <div className="readmore">
      <div className="container">
        <div className="row g-2">
          <div className="col-4">
            <div className="read_card1">
              <img
                src="	https://oxpitan-gatsby.vercel.app/static/hiw-img-99e56563f121a0abf0d6f3b725769644.jpg"
                alt="card1"
              />
              <div className="card1_color"></div>
              <h3>More charity better lives</h3>
              <Link to="events" className="read_link">
                <button>Read More</button>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="read_card2">
              <img
                src="https://oxpitan-gatsby.vercel.app/static/hiw-img2-67c43f779578d479178dfa927d247ec2.jpg"
                alt="card2"
              />
              <div className="card2_color"></div>
              <h3>How to become volunteer</h3>
              <Link to="events" className="read_link">
                <button>Read More</button>
              </Link>
            </div>
          </div>
          <div className="col-4">
            <div className="read_card3">
              <img
                src="	https://oxpitan-gatsby.vercel.app/static/hiw-img-99e56563f121a0abf0d6f3b725769644.jpg"
                alt="card3"
              />
              <div className="card3_color"></div>
              <h3>Poor children education</h3>
              <Link to="events" className="read_link">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
