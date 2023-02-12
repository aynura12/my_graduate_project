import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../pageStyle/events.scss";
const Events = () => {
  return (
    <>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <section className="events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="events_title">
                <h2>Events</h2>
                <Link to="/home1">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="events_card">
                <img
                  src="http://layerdrops.com/oxpitan/images/img7.jpg"
                  alt="img"
                />
                <span className="date_of_card card1">
                  <span className="day_date">6</span>
                  <span className="month_date">may</span>
                </span>
                <div className="events_text">
                  <h3 className="events_title1">Save the planets</h3>
                  <ul>
                    <li className="events_list1">8:00am to 2:00pm</li>
                    <li className="events_list1">San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="events_card">
                <img
                  src="http://layerdrops.com/oxpitan/images/img8.jpg"
                  alt="img"
                />
                <span className="date_of_card card2">
                  <span className="day_date">9</span>
                  <span className="month_date">mart</span>
                </span>
                <div className="events_text">
                  <h3 className="events_title2">Play for the world</h3>
                  <ul>
                    <li className="events_list2">8:00am to 2:00pm</li>
                    <li className="events_list2">San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="events_card">
                <img
                  src="http://layerdrops.com/oxpitan/images/img9.jpg"
                  alt="img"
                />
                <span className="date_of_card card3">
                  <span className="day_date">4</span>
                  <span className="month_date">mar</span>
                </span>
                <div className="events_text">
                  <h3 className="events_title3">Water for charity</h3>
                  <ul>
                    <li className="events_list3">8:00am to 2:00pm</li>
                    <li className="events_list3">San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="events_card">
                <img
                  src="http://layerdrops.com/oxpitan/images/img16.jpg"
                  alt="img"
                />
                <span className="date_of_card card4">
                  <span className="day_date">2</span>
                  <span className="month_date">may</span>
                </span>
                <div className="events_text">
                  <h3 className="events_title4">Help for education</h3>
                  <ul>
                    <li className="events_list4">8:00am to 2:00pm</li>
                    <li className="events_list4">San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="events_card">
                <img
                  src="http://layerdrops.com/oxpitan/images/img17.jpg"
                  alt="img"
                />
                <span className="date_of_card card5">
                  <span className="day_date">22</span>
                  <span className="month_date">july</span>
                </span>
                <div className="events_text">
                  <h3 className="events_title5">Protect eco system</h3>
                  <ul>
                    <li className="events_list5">8:00am to 2:00pm</li>
                    <li className="events_list5">San marcos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="events_card">
                <img
                  src="http://layerdrops.com/oxpitan/images/img18.jpg"
                  alt="img"
                />
                <span className="date_of_card  card6">
                  <span className="day_date">11</span>
                  <span className="month_date">july</span>
                </span>
                <div className="events_text">
                  <h3 className="events_title6">Fight for right cause</h3>
                  <ul>
                    <li className="events_list6">8:00am to 2:00pm</li>
                    <li className="events_list6">San marcos</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
