import React from "react";
import { Link } from "react-router-dom";
import "../home1/cause.scss";
import donationLogo from "../../media/smalllogo.png";
import { useState, useEffect } from "react";
import axios from "axios";
const Cause = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/cause");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="cause">
      <div className="container">
        <div className="cause_title">
          <img src={donationLogo} alt="logo" />
          <h2>Latest Causes</h2>
        </div>

        <div className="row">
          {data?.map((datas)=>{
            return( <div className="cards col-lg-4 col-md-12">
            <img
              src={datas.image}
              alt=""
            />
            <div className="cause_card">
              <h3>
                <Link to="causesdetail" className="cause_title_link">
                {datas.title}
                </Link>
              </h3>
              <p>{datas.text}</p>
              <ul>
                <li className="causes_list">
                <i class="fa-solid fa-bullseye"></i>Goal:<span>${datas.goal},000</span>
                </li>
                <li className="causes_list">
                  <i class="fa-solid fa-chart-line"></i>Raised:
                  <span>{datas.raised}0</span>
                </li>
              </ul>
              <Link to="/donatenow" className="cause_link">
                <button>Donate Now</button>
              </Link>
            </div>
          </div>)
          })}
         
          {/* <div className="cards col-lg-4 col-md-12">
            <img
              src="https://oxpitan-gatsby.vercel.app/static/img2-0e2d4e23ddf6de2cfc3ff871784bf4b7.jpg"
              alt=""
            />
            <div className="cause_card">
              <h3>
                <Link to="causesdetail" className="cause_title_link">
                  They want to study
                </Link>
              </h3>
              <p>Aliq is notm hendr erit a augue insu image pellen tes.</p>
              <ul>
                <li className="causes_list">
                  <i class="fa-solid fa-bullseye"></i>Goal:<span>$30,000</span>
                </li>
                <li className="causes_list">
                  <i class="fa-solid fa-chart-line"></i>Raised:
                  <span>25,270</span>
                </li>
              </ul>
              <Link to="donatenow" className="cause_link">
                <button>Donate Now</button>
              </Link>
            </div>
          </div>
          <div className="cards col-lg-4 col-md-12">
            <img
              src="https://oxpitan-gatsby.vercel.app/static/img3-ffc5abe9fce5f841e0b668145a11f6bc.jpg"
              alt=""
            />
            <div className="cause_card">
              <h3>
                <Link to="causesdetail" className="cause_title_link">
                  Healthy Food for All
                </Link>
              </h3>
              <p>Aliq is notm hendr erit a augue insu image pellen tes.</p>
              <ul>
                <li className="causes_list">
                  <i class="fa-solid fa-bullseye"></i>Goal:<span>$30,000</span>
                </li>
                <li className="causes_list">
                  <i class="fa-solid fa-chart-line"></i>Raised:
                  <span>25,270</span>
                </li>
              </ul>
              <Link to="donatenow" className="cause_link">
                <button>Donate Now</button>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cause;
