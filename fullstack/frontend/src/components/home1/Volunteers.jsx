import React from "react";
import "../home1/volunteers.scss";
import donationLogo from "../../media/smalllogo.png";
import { Link } from "react-router-dom";

const Volunteers = () => {
  return (
    <>
    <section className="volunteers">
      <div className="container">
        <div className="volunteers_text">
          <img src={donationLogo} alt="" />
          <h2>Our Volunteers</h2>
          <p>MEET PROFESIONALS</p>
        </div>

        <div className="row g-3">
          <div className="col-lg-3 col-md-6">
            <div className="volunteers_card">
              <img
                src="https://oxpitan-gatsby.vercel.app/static/team-0c8be72bc06a63200bec5d1fc6c170a6.jpg"
                alt="card"
              />
              <div className="volunteers_icons">
                <ul>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-twitter"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-facebook-f"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-pinterest"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="volunteers_title title1">
                {" "}
                <h2>Jessica Brown</h2>
                <p>Student</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="volunteers_card">
              <img
                src="https://oxpitan-gatsby.vercel.app/static/team2-7e9e4dbc81abdae64b2d921c98357f55.jpg"
                alt="card"
              />
              <div className="volunteers_icons">
                <ul>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-twitter"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-facebook-f"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-pinterest"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="volunteers_title title2">
                {" "}
                <h2>Yoni Albert</h2>
                <p>Volunteer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="volunteers_card">
              <img
                src="https://oxpitan-gatsby.vercel.app/static/team3-58c6d1952ca6f54765d16c9d0cb4dad3.jpg"
                alt="card"
              />
              <div className="volunteers_icons">
                <ul>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-twitter"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-facebook-f"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-pinterest"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="volunteers_title title3">
                {" "}
                <h2>Christine Eve</h2>
                <p>Co Funder</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="volunteers_card">
              <img
                src="https://oxpitan-gatsby.vercel.app/static/team4-3b65571d05411f620c6a029bb491afdf.jpg"
                alt="card"
              />
              <div className="volunteers_icons">
                <ul>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-twitter"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-facebook-f"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-pinterest"></i>
                      </div>
                    </a>
                  </li>
                  <li className="list">
                    <a href="/" className="link">
                      <div>
                        <i className="fa-brands fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="volunteers_title title4" typeof="button">
                <h2>David Hardson</h2>
                <p>Volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="start">
        <img src={donationLogo}alt="" />
        <h2>Our fingerprints on the lives we touch never fade</h2>
        <Link to="donatenow"><button>START DONATION</button></Link>
    </section>
    </>
    
  );
};

export default Volunteers;
