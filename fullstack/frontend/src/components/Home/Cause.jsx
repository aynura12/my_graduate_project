import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Home/cause.scss";
import donationLogo from "../../media/smalllogo.png";
import { useState} from "react";
import { mainContext } from "../../Context/ContextProvider";
const Cause = () => {
  const {causes,setCause}=useContext(mainContext)
  const [sorted, setSorted] = useState({ sorted: "goal", reversed: false });
  const sorteddata = () => {
    setSorted({ sorted: "goal", reversed: !sorted.reversed });
    const datacopy = [...causes];
    datacopy.sort((a, b) => {
      if (sorted.reversed) {
        return b.goal - a.goal;
      } else {
        return a.goal - b.goal;
      }
    });
    setCause(datacopy);
  };
  return (
    <div className="cause">
      <div className="container">
        <div className="cause_title">
          <img src={donationLogo} alt="logo" />
          <h2>Latest Causes</h2>
        </div>
        <button onClick={sorteddata}>Sorted</button>
        <div className="row">
          {causes?.map((cause) => {
            return (
              <div className="cards col-lg-4 col-md-6" key={cause._id}>
                <img src={cause.image} alt="" />
                <div className="cause_card">
                  <h3>
                    <Link to={`${cause._id}`} className="cause_title_link">
                      {cause.title}
                    </Link>
                  </h3>
                  <p>{cause.text}</p>
                  <ul>
                    <li className="causes_list">
                      <i className="fa-solid fa-bullseye"></i>Goal:
                      <span>${cause.goal},000</span>
                    </li>
                    <li className="causes_list">
                      <i className="fa-solid fa-chart-line"></i>Raised:
                      <span>{cause.raised}0</span>
                    </li>
                  </ul>
                  <Link to="/donatenow" className="cause_link">
                    <button>Donate Now</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cause;
