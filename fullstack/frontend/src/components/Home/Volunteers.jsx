import React, {useContext} from "react";
import "../Home/volunteers.scss";
import donationLogo from "../../media/smalllogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { mainContext } from "../../Context/ContextProvider";

const Volunteers = () => {
  const [search, setSearch] = useState("");
  const {volunteers}=useContext(mainContext)
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
          <input
            type="text"
            placeholder="Search Name"
            onChange={(e) => setSearch(e.target.value)}
          />
            {volunteers?.filter((d) => {
                return search.toLowerCase() === ""
                  ? d
                  : d.name.toLowerCase().includes(search);
              }).map((volunteer) => {
              return (
                <div className="col-lg-3 col-md-6" key={volunteer._id}>
                  <div className="volunteers_card">
                    <div className="card_image">
                      <img src={volunteer.image} alt="card" />
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
                    </div>
                    <div
                      className="volunteers_title"
                      style={{ backgroundColor: volunteer.color }}
                    >
                      <h2>{volunteer.name}</h2>
                      <p>{volunteer.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="start">
        <img src={donationLogo} alt="" />
        <h2>Our fingerprints on the lives we touch never fade</h2>
        <Link to="/donatenow">
          <button>START DONATION</button>
        </Link>
      </section>
    </>
  );
};

export default Volunteers;
