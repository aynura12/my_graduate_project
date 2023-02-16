import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../pageStyle/ourteam.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const OurTeam = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/team");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Our Team</title>
      </Helmet>
      <div className="ourteam">
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
      <section className="our_team">
        <div className="container">
          <div className=" row">
            {data?.map((datas) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <div className="volunteers_card volunteer_row">
                    <div className="card_image">
                      <img src={datas.image} alt="card" />
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
                      style={{ backgroundColor: datas.color }}
                    >
                      <h2>{datas.name}</h2>
                      <p>{datas.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
